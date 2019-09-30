// modules
import { connect } from 'react-redux'
import * as R from 'ramda'
// components
import Result from './Result.presentational'
// views
import { isAdminView } from '../App/App.reducer'
import { resultsView } from './Result.reducer'
import { participantsCountView, maxPercentView, minPercentView, averagePercentView, userResultView } from '../Home/Home.reducer'
// actions
import { push } from '../../setup/redux'


const mapStateToProps = () => ({
  isAdmin: isAdminView(),
  participantCount: participantsCountView(),
  maxPercent: maxPercentView(),
  minPercent: minPercentView(),
  averagePercent: averagePercentView(),
  userResult: userResultView(),
  results: R.take(5, resultsView()), // TODO: show all results for admins
})

const mapDispatchToProps = () => ({
  onReturn: () => push('/home'),
  onExport: () => console.log('export'),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result)
