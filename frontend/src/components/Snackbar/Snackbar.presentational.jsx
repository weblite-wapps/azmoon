// modules
import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
// helpers
import { toPersian } from '../../helper/functions/utils.helper'

const AppSnackbar = ({ message, snackbarIsOpen, closeSnackbar }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    open={snackbarIsOpen}
    autoHideDuration={3000}
    onClose={closeSnackbar}
    message={<span id="message-id">{toPersian(message)}</span>}
  />
)

AppSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  snackbarIsOpen: PropTypes.bool.isRequired,
  closeSnackbar: PropTypes.func.isRequired,
}

export default AppSnackbar
