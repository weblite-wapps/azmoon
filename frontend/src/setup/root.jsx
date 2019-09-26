// Modules
import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider } from '@material-ui/core/styles'
// Setup
import store, { history } from './redux'
// Styles
import theme from '../helper/style/appTheme'
import './root.scss'
import './fonts/fonts.scss'
// Component
import App from '../components/App/App.container'
import Snackbar from '../components/Snackbar/Snackbar.container.react'
import Loading from '../helper/components/Loading/Loading.presentational'

const Home = lazy(() => import('../components/Home/Home.container'))
const Create = lazy(() => import('../components/Create/Create.container'))
const Result = lazy(() => import('../components/Result/Result.container'))
const Exam = lazy(() => import('../components/Exam/Exam.container'))

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div style={{ height: '100%' }}>
          <App />
          <Snackbar location={{ vertical: 'bottom', horizontal: 'right' }} />

          <Suspense fallback={<Loading />}>
            <Route exact path="/" render={() => <Create />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="/result" render={() => <Result />} />
            <Route path="/exam" render={() => <Exam />} />
          </Suspense>
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
)
