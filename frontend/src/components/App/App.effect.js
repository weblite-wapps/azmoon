// modules
import 'rxjs'
import { ofType, combineEpics } from 'redux-observable'
import { tap, mergeMap, filter, ignoreElements } from 'rxjs/operators'
// actions
import { dispatchSetResults } from '../Result/Result.action'
import {
  dispatchSetIsExamReady,
  dispatchSetIsExamStarted,
  dispatchSetIsExamFinished,
  dispatchSetIsParticipated,
  dispatchSetIsLoading,
  FETCH_INITIAL_DATA,
  dispatchSetUserInfo,
} from './App.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import {
  dispatchSetHomeInfo,
  dispatchEffectChangeRemainingTime,
  dispatchSetIsSchoolModalOpen,
} from '../Home/Home.action'
import {
  dispatchSetExamInfo,
  dispatchSetExamAnswers,
  dispatchHandleChangeExamDuration,
  dispatchStartExam,
} from '../Exam/Exam.action'
// views
import { wisView, isAdminView, userIdView } from './App.reducer'
// helpers
import { getRequest } from '../../helper/functions/request.helper'
import { push } from '../../setup/redux'
import { mapToUserIds, injectUserInfo, getRemainedTime } from './App.helper'

const initialFetchEpic = action$ =>
  action$.pipe(
    ofType(FETCH_INITIAL_DATA),
    tap(() => dispatchSetIsLoading(true)),
    mergeMap(() =>
      Promise.all([
        getRequest(`/exam/${wisView()}`).on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        ),
        getRequest(`/result`)
          .query({ stdId: userIdView(), examId: wisView() })
          .on(
            'error',
            err =>
              err.status !== 304 &&
              dispatchChangeSnackbarStage('Server disconnected!'),
          ),
        getRequest(`/exam/${wisView()}/results`).on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        ),
        getRequest(`/user/${userIdView()}`).on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage('Server disconnected!'),
        ),
      ]).then(([exam, result, results, user]) => ({
        exam: exam.body,
        result: result.body,
        results: results.body,
        user: user.body,
      })),
    ),
    tap(() => window.W && window.W.start()),
    tap(({ exam }) => !exam && !isAdminView() && push('/home')),
    tap(({ user }) => {
      if (!isAdminView()) {
        if (user) dispatchSetUserInfo(user)
        if (!(user && user.county)) dispatchSetIsSchoolModalOpen(true)
      }
    }),
    filter(({ exam }) => {
      if (!exam) {
        dispatchSetIsLoading(false)
        return false
      }
      return true
    }),
    tap(() => dispatchSetIsExamReady(true)),
    tap(({ exam, result, results }) =>
      dispatchSetHomeInfo({
        ...exam,
        results,
        userResult: result && result.percent,
      }),
    ),
    tap(() => {
      dispatchEffectChangeRemainingTime()
      push('/home')
    }),
    tap(({ results }) => {
      window.W &&
        window.W.getUsersInfoById(mapToUserIds(results)).then(usersInfo => {
          const newResults = injectUserInfo(results, usersInfo)
          dispatchSetResults(newResults)
        })
    }),

    tap(
      ({ exam: { startTime } }) =>
        new Date() > new Date(startTime) && dispatchSetIsExamStarted(true),
    ),
    tap(
      ({ exam: { endTime } }) =>
        new Date() > new Date(endTime) && dispatchSetIsExamFinished(true),
    ),
    tap(({ result, exam: { duration, questions } }) => {
      if (result && !result.endTime) {
        const remainedTime = getRemainedTime(duration, result.startTime)
        if (remainedTime > 0) {
          dispatchSetExamInfo({ duration: remainedTime, questions })
          dispatchStartExam(result.answers)
          dispatchHandleChangeExamDuration()
          push('/exam')
        }
      } else dispatchSetExamInfo({ duration: duration * 60, questions })
    }),
    filter(({ result }) => !isAdminView() && result && result.endTime),
    tap(() => dispatchSetIsParticipated(true)),
    tap(({ result }) => dispatchSetExamAnswers(result.answers)),
    ignoreElements(),
  )

export default combineEpics(initialFetchEpic)
