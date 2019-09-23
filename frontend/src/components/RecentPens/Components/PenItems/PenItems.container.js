import { connect } from 'react-redux'

import PenItems from './PenItems'
import { dispatchLikePen } from '../../RecentPens.action'
import { appUserView, wisView } from '../../../App/App.reducer'

const mapDispatchToProps = () => ({
  send: _id =>
    window.W.sendMessageToCurrentChat('wapp', {
      // TODO : FILL WITH INLINE WAPPID
      wappId: '5d1f352a4e843d1078d59f89',
      wisId: '',
      customize: { _id },
    }),

  like: (user, _id) => dispatchLikePen(user, _id),
})

const mapStateToProps = () => ({
  user: appUserView(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PenItems)
