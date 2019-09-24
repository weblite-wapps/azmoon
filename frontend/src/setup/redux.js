// modules
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

// reducers
import ExamReducer from '../components/Exam/Exam.reducer'

// epics
import ExamEffect from '../components/Exam/Exam.effect'
// import CreatePensEffect from '../components/CreatePen/CreatePen.effect'
// import RecentPensEffect from '../components/RecentPens/RecentPens.effect'
// import DashboardEffect from '../components/Dashboard/Dashboard.effect'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'pennelite',
      })
    : compose
/* eslint-enable */

const rootEpic = combineEpics(ExamEffect)
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  combineReducers({
    Exam: ExamReducer,
  }),
  composeEnhancers(applyMiddleware(epicMiddleware)),
)

epicMiddleware.run(rootEpic)

export const { dispatch, getState } = store
export default store
