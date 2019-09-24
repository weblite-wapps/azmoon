// modules
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

// reducers
import AppReducer from '../components/App/App.reducer'
import ExamReducer from '../components/Exam/Exam.reducer'
import CreateReducer from '../components/Create/Create.reducer'

// epics
import ExamEffect from '../components/Exam/Exam.effect'
import CreateEffect from '../components/Create/Create.effect'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'azmoon',
      })
    : compose
/* eslint-enable */

const rootEpic = combineEpics(ExamEffect, CreateEffect)
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  combineReducers({
    Exam: ExamReducer,
    Create: CreateReducer,
    App: AppReducer,
  }),
  composeEnhancers(applyMiddleware(epicMiddleware)),
)

epicMiddleware.run(rootEpic)

export const { dispatch, getState } = store
export default store
