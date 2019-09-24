// modules
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { createMemoryHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
// reducers
import AppReducer from '../components/App/App.reducer'
import ExamReducer from '../components/Exam/Exam.reducer'
import CreateReducer from '../components/Create/Create.reducer'
import SnackbarReducer from '../components/Snackbar/Snackbar.reducer'
// epics
import AppEffect from '../components/App/App.effect'
import ExamEffect from '../components/Exam/Exam.effect'
// import CreatePensEffect from '../components/CreatePen/CreatePen.effect'
// import RecentPensEffect from '../components/RecentPens/RecentPens.effect'
// import DashboardEffect from '../components/Dashboard/Dashboard.effect'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createMemoryHistory()
export const push = history.push

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'azmoon',
      })
    : compose
/* eslint-enable */

const rootEpic = combineEpics(AppEffect, ExamEffect)
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  combineReducers({
    Exam: ExamReducer,
    Create: CreateReducer,
    Snackbar: SnackbarReducer,
    App: AppReducer,
    router: connectRouter(history),
  }),
  composeEnhancers(applyMiddleware(middleware, epicMiddleware)),
)

epicMiddleware.run(rootEpic)

export const { dispatch, getState } = store
export default store
