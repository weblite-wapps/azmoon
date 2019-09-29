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
import { formattedSecondsForStats } from '../../helper/functions/utils.helper'

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
        getRequest(`/exam/${wisView()}/result`).on(
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
    tap(() => dispatchSetIsExamReady(true)),
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
          dispatchSetExamInfo({ duration: remainedTime , questions })
          dispatchStartExam()
          dispatchHandleChangeExamDuration()
          push('/exam')
          dispatchChangeSnackbarStage(`‍تا پایان آزمون وقت دارید‍ ${formattedSecondsForStats(remainedTime)}`) 
        }
      }
      else dispatchSetExamInfo({ duration: duration * 60 , questions })
    }),
    filter(({ result }) => !isAdminView() && result && result.endTime),
    tap(() => dispatchSetIsParticipated(true)),
    tap(({ result }) => dispatchSetExamAnswers(result.answers)),
    ignoreElements(),
  )

export default combineEpics(initialFetchEpic)
