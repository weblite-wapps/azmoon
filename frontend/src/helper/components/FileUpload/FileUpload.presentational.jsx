import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'

// helper
import { cns, getDirection } from '../../functions/utils.helper'

const useStyles = makeStyles(() => ({
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
    paddingRight: 6,
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
    width: '100%',
  },
  deleteIcon: {
    height: 10,
    width: 10,
  },
  deleteButton: {
    height: 20,
    width: 20,
    padding: 0,
    minWidth: 20,
    borderRadius: 50,
    minHeight: 'unset',
    backgroundColor: '#D65555',
    color: '#fff',
    transition: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#cc3838',
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
  nameHelper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
}))

const FileUpload = ({
  uploadLabel = 'انتخاب فایل',
  id,
  label,
  onUpload,
  onChange,
  url,
  name,
}) => {
  const [state, setState] = React.useState({ name: '', url: '' })
  const inputRef = React.useRef(null)
  const direction = React.useRef('rtl')
  const onDelete = () => {
    setState({ name: '', url: '' })
    onChange({ name: '', url: '' })
  }

  React.useEffect(() => {
    if (url === '') {
      setState({ name: '', url: '' })
    } else if (url !== state.url) {
      setState({ name, url })
    }
  }, [url, name, state])

  const onInputChange = () => {
    if (!inputRef.current) return

    const {
      files,
      files: {
        0: { name },
      },
    } = inputRef.current
    // WAPP API
    onUpload(files[0]).then(({ name, url }) => {
      onChange({ name, url })
      setState({ name, url })
    })
    direction.current = getDirection(name)
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
          disabled={!!name}
          onChange={onInputChange}
          id={id}
          type="file"
        />
        <label htmlFor={id} className={classes.uploadLabel}>
          <Button
            color="primary"
            className={cns(classes.button, classes.font)}
            aria-label="upload picture"
            component="span"
            // onClick={e => {
            // TODO: if Upload API is ready get name and setName that name in resolved Promise
            // e.preventDefault()
            // onUpload(e)
            // }}
          >
            {uploadLabel}
          </Button>
        </label>
        {name && (
          <div className={classes.nameHelper}>
            <Typography
              className={cns(classes.fileName, classes.font)}
              style={{ direction: direction.current }}
            >
              {name}
            </Typography>
            <Fab
              size="small"
              onClick={onDelete}
              className={classes.deleteButton}
            >
              <CloseIcon className={classes.deleteIcon} />
            </Fab>
          </div>
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
