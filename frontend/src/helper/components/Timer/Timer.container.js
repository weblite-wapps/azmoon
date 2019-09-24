// modules
import { connect } from 'react-redux'
// components
import Timer from './Timer.presentational'

// helper function
const { format } = new Intl.NumberFormat([], { minimumIntegerDigits: 2 })


const mapStateToProps = (_, { time }) => ({
  formattedTime: `${format(Math.floor(time / 3600))}:${format(
                  Math.floor((time % 3600) / 60),
                  )}:${format(time % 60)}`,
})

export default connect(
  mapStateToProps,
  null,
)(Timer)
