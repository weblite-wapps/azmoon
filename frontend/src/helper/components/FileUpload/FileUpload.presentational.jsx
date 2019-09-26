import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// helper
import { cns, getDirection } from '../../functions/utils.helper'

const useStyles = makeStyles(theme => ({
  fileUploadComponent: {
    marginTop: 15,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 11,
    border: '1px solid #ced4da',
    height: 35,
    boxSizing: 'border-box',
  },

  button: {
    backgroundColor: '#7dd9de',
    color: '#fff',
    height: '100%',
    borderRadius: 0,
    width: 90,
    '&:hover': {
      backgroundColor: '#4286b2',
    },
  },
  input: {
    display: 'none',
  },
  font: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
  label: {
    marginBottom: 3,
  },
  uploadLabel: {
    flexShrink: 0,
    height: '100%',
  },
  fileName: {
    marginLeft: 10,
  },
}))

const FileUpload = ({ uploadLabel = 'انتخاب فایل', id, label, onUpload }) => {
  const [name, setName] = React.useState('')
  const inputRef = React.useRef(null)
  const direction = React.useRef('rtl')

  const onChange = () => {
    if (!inputRef.current) return

    const {
      files: {
        length,
        0: { name },
      },
    } = inputRef.current

    // WAPP API
    // onUpload(files)
    direction.current = getDirection(name)
    setName(name)
  }

  const classes = useStyles()
  return (
    <div className={classes.fileUploadComponent}>
      <Typography className={cns(classes.label, classes.font)}>
        {label}
      </Typography>
      <div className={classes.container}>
        <input
          ref={inputRef}
          accept="image/*"
          className={classes.input}
          onChange={onChange}
          id={id}
          type="file"
        />
        <label htmlFor={id} className={classes.uploadLabel}>
          <Button
            color="primary"
            className={cns(classes.button, classes.font)}
            aria-label="upload picture"
            component="span"
            onClick={e => {
              // TODO: if Upload API is ready get name and setName that name in resolved Promise
              // e.preventDefault()
              // onUpload(e)
            }}
          >
            {uploadLabel}
          </Button>
        </label>
        {name && (
          <Typography
            className={cns(classes.fileName, classes.font)}
            style={{ direction: direction.current }}
          >
            {name}
          </Typography>
        )}
      </div>
    </div>
  )
}

FileUpload.propTypes = {
  label: PropTypes.string,
  /** uniq identifier */
  id: PropTypes.string.isRequired,
  /** API form Wapp to upload file */
  onUpload: PropTypes.func.isRequired,
}
FileUpload.defaultProps = {
  label: '',
}

export default FileUpload
