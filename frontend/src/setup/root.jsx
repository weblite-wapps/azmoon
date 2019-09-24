// Modules
import React from 'react'
import { Provider } from 'react-redux'
import {
  Router,
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router'
import { MuiThemeProvider } from '@material-ui/core/styles'
// Setup
import store from './redux'
// Styles
import theme from '../helper/style/appTheme'
import './root.scss'

// Component
import App from '../components/App/App.container'
import Home from '../components/Home/Home.container'
import Create from '../components/Create/Create.container'

const source = createMemorySource()
const history = createHistory(source)
export const push = history.push

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <LocationProvider history={history}>
        <App />
        <Router>
          <Home path="/home" />
          <Create path="/create" />
        </Router>
      </LocationProvider>
    </MuiThemeProvider>
  </Provider>
)
