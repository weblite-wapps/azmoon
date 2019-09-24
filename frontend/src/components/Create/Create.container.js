import { connect } from 'react-redux'
import Create from './Create'
import {} from './Create.action'
import { questionIndexView } from './Create.reducer'

const mapDispatchToProps = () => ({})
const mapStateToProps = () => ({
  index: questionIndexView(),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create)
