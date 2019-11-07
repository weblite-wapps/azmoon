// modules
import { connect } from 'react-redux'
import * as R from 'ramda'
// components
import Result from './Result.presentational'
// views
import { isAdminView } from '../App/App.reducer'
import { resultsView, userInfosView, userRankView } from './Result.reducer'
import {
  participantsCountView,
  maxPercentView,
  minPercentView,
  averagePercentView,
  userResultView,
  titleView,
} from '../Home/Home.reducer'
// actions
import { push } from '../../setup/redux'

const mapStateToProps = () => ({
  isAdmin: isAdminView(),
  participantCount: participantsCountView(),
  maxPercent: maxPercentView(),
  minPercent: minPercentView(),
  averagePercent: averagePercentView(),
  userResult: userResultView(),
  results: R.take(10, resultsView()), // TODO: show all results for admins
  // results: R.take(3, resultsView()), // TODO: show all results for admins
  title: titleView(),
  allResults: resultsView(),
  user: userInfosView(),
  userRank: userRankView(),
})

const mapDispatchToProps = () => ({
  onReturn: () => push('/home'),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result)
