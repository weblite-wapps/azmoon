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
} from './App.action'
import { dispatchChangeSnackbarStage } from '../Snackbar/Snackbar.action'
import { dispatchSetHomeInfo } from '../Home/Home.action'
import {
  dispatchSetExamDuration,
  dispatchSetExamInfo,
  dispatchSetExamAnswers,
  dispatchHandleStartExam,
} from '../Exam/Exam.action'
// views
import { wisView, isAdminView, userIdView, isExamFinishedView } from './App.reducer'
// helpers
import { getRequest } from '../../helper/functions/request.helper'
import { push } from '../../setup/redux'
import { mapToUserIds, injectUserInfo } from './App.helper'

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
      ]).then(([exam, result, results]) => ({
        exam: exam.body,
        result: result.body,
        results: results.body,
      })),
    ),
    tap(() => window.W && window.W.start()),
    tap(({ exam }) => !exam && !isAdminView() && push('/home')),
    filter(({ exam }) => {
      if (!exam) {
        dispatchSetIsLoading(false)
        return false
      }
      return true
    }),
    tap(() => push('/home')),
    tap(({ results }) => {
      window.W &&
        window.W.getUsersInfoById(mapToUserIds(results)).then(usersInfo => {
          const newResults = injectUserInfo(results, usersInfo)
          dispatchSetResults(newResults)
        })
    }),
    tap(console.log),
    tap(({ exam, result }) =>
      dispatchSetHomeInfo({ ...exam, userResult: result && result.percent }),
    ),
    tap(({ exam: { duration, questions } }) =>
      dispatchSetExamInfo({ duration, questions }),
    ),
    tap(({ exam }) => dispatchSetExamDuration(exam.duration * 60)),
    tap(() => dispatchSetIsExamReady(true)),
    tap(
      ({ exam }) =>
        new Date() > new Date(exam.startTime) && dispatchSetIsExamStarted(true),
    ),
    tap(
      ({ exam }) =>
        new Date() > new Date(exam.endTime) && dispatchSetIsExamFinished(true),
    ),
    tap(() => !isExamFinishedView() && dispatchHandleStartExam()),
    filter(() => !isAdminView()),
    tap(({ result }) => result && dispatchSetIsParticipated(true)),
    tap(({ result }) => result && dispatchSetExamAnswers(result.answers)),
    ignoreElements(),
  )

export default combineEpics(initialFetchEpic)
