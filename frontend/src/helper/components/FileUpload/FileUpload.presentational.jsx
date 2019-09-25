import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 11,
    border: '1px solid #ced4da',
  },

  button: {
    backgroundColor: '#7dd9de',
    color: '#fff',
    height: 35,
    '&:hover': {
      backgroundColor: '#4286b2',
    },
  },
  input: {
    display: 'none',
  },
  label: {
    flexShrink: 0,
  },
  fileName: {
    marginLeft: 10,
    textOverflow: 'ellipsis',
  },
}))

const FileUpload = ({ uploadLabel = 'انتخاب فایل', id, onUpload }) => {
  // FIXME: If wapp api need somthing like blob or somthing get that in onChange function
  // const inputRef = React.useRef(null)
  // const onEnter = onEnterPress(() => {
  //   if (!inputRef.current) return
  //   inputRef.current.click()
  // })

  // const onChange = () => {
  //   if (!inputRef.current) return

  //   const {
  //     files: {
  //       length,
  //       0: { name },
  //     },
  //   } = inputRef.current

  //   if (!multiple || length === 1) setOutput(name)
  //   else setOutput(`${length} files`)
  // }

  const [name] = React.useState('')

  const classes = useStyles()
  return (
    <div className={classes.container}>
      <input accept="image/*" className={classes.input} id={id} type="file" />
      <label htmlFor={id} className={classes.label}>
        <Button
          color="primary"
          className={classes.button}
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
        <Typography noWrap className={classes.fileName}>
          {name}
        </Typography>
      )}
    </div>
  )
}

FileUpload.propTypes = {
  /** uniq identifier */
  id: PropTypes.string.isRequired,
  /** API form Wapp to upload file */
  onUpload: PropTypes.func.isRequired,
}
FileUpload.defaultProps = {}

export default FileUpload
