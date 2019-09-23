// Modules
import React from 'react'
import PropTypes from 'prop-types'
// local modules
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const More = ({
  isMenuOpen,
  changePreviewMode,
  changeViewMode,
  closeMenu,
  savePen,
  anchorEl,
  id,
}) => {
  return (
    <Menu id={id} anchorEl={anchorEl} open={isMenuOpen} onClose={closeMenu}>
      <MenuItem onClick={changePreviewMode}>Preview btn</MenuItem>
      <MenuItem onClick={savePen}>Save</MenuItem>
      <MenuItem onClick={changeViewMode}>Change view mode</MenuItem>
    </Menu>
  )
}

More.propTypes = {
  isMenuOpen: PropTypes.bool,
  changePreviewMode: PropTypes.func,
  changeViewMode: PropTypes.func,
  closeMenu: PropTypes.func,
  savePen: PropTypes.func,
}

More.defaultProps = {}

export default More
