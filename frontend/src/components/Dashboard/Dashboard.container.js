import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import { dispatchFetchWriterPens } from './Dashboard.action'
import { userPensView } from './Dashboard.reducer'
import { appUserView } from '../App/App.reducer'
// import { dispatchSetWriterAndTitle } from '../CreatePen/CreatePen.action'

const mapStateToProps = () => ({
  pens: userPensView(),
  user: appUserView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchWriterPens,
  penClick: () => {},
  send: (user, title, wisId) =>
    window.W.sendMessageToCurrentChat('wapp', {
      wappId: '5d1f352a4e843d1078d59f89',
      wisId,
      user,
      title,
    }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
