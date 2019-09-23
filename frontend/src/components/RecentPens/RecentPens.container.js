// modules
import { connect } from 'react-redux'
// components
import RecentPens from './RecentPens'
// views
import {
  pensView,
  searchIsShownView,
  menuIsShownView,
  searchQueryView,
} from './RecentPens.reducer'

// actions
import {
  dispatchFetchRecentPens,
  dispatchSetMenuIsShown,
  dispatchSetCloseMenu,
  dispatchSetSearchQuery,
} from './RecentPens.action'
import { dispatchSetClickedPenId } from '../CreatePen/CreatePen.action'

const mapStateToProps = () => ({
  pens: pensView(),
  showSearch: searchIsShownView(),
  isMenuOpen: menuIsShownView(),
  searchQuery: searchQueryView(),
})

const mapDispatchToProps = () => ({
  fetchPens: dispatchFetchRecentPens,
  penClick: dispatchSetClickedPenId,
  menuClick: dispatchSetMenuIsShown,
  closeMenu: dispatchSetCloseMenu,
  setSearchQuery: event => dispatchSetSearchQuery(event.target.value),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecentPens)
