import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Zoom from '@material-ui/core/Zoom'
// helper
import { cns, ab } from '../../functions/utils.helper'

// style
const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
    height: 150,
    border: '1px solid #CCC',
    borderRadius: 11,
    backgroundColor: '#fff',
    cursor: 'pointer',
    outline: 'none',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
  openImageContainer: {
    position: 'fixed',
    zIndex: 2000,
    width: '100%',
    height: '100%',
  },
  openImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    transform: 'translate(-50%, -50%)',
  },
  filter: {
    filter: 'blur(3px) grayscale(1.5)',
  },
}))

const ImageModal = ({ src, alt }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const openModal = () => setOpen(true)
  const closeModal = e => {
    e.stopPropagation()
    setOpen(false)
  }
  return (
    <div className={classes.paper} onClick={openModal}>
      <img
        className={cns(classes.image, ab(classes.filter)(open))}
        src={src}
        alt={alt}
      />

      <Zoom in={open}>
        <div className={classes.openImageContainer} onClick={closeModal}>
          <img className={classes.openImage} src={src} alt={alt} />
        </div>
      </Zoom>
    </div>
  )
}

ImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
export default ImageModal
