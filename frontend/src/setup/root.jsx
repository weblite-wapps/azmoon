// Modules
import React from 'react'
import { Provider } from 'react-redux'
import {
  Router,
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router'
// Setup
import './root.scss'
import store from './redux'
// Styles

// Component
import App from "../components/App/App.container";

const source = createMemorySource()
const history = createHistory(source)
export const push = history.push

export default () => (
  <Provider store={store}>
    <LocationProvider history={history}>
      <App />
      {/* <Router> */}
        {/* <RecentPens path="/" /> */}
      {/* </Router> */}
    </LocationProvider>
  </Provider>
)
