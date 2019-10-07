import React from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputLabel,
} from '@material-ui/core'
import { makeStyles, withStyles, fade } from '@material-ui/core/styles'

// schools
const SCHOOLS = [
  'کلاس آنلاین',
  'شاهد مبشر',
  'مدرسان اندیشه',
  'جاویدان',
  'تدبیر دانش',
]

const useStyles = makeStyles(theme => ({
  formControlContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  formControl: {
    minWidth: 120,
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
  },
  paper: {
    width: '100%',
    height: 'auto',
  },
  dialogPaper: {
    margin: 5,
    width: 300,
    overflow: 'hidden',
  },
  menuItem: {
    textAlign: 'right',
    border: '1px solid #ced4da',
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 500,
    letterSpacing: -0.08,
    borderRadius: 11,
    padding: '5px 10px',
    marginTop: '25px !important',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade('rgb(128, 130, 133)', 0.5)} 0 0 0 0.1rem`,
      borderColor: 'rgb(128, 130, 133)',
    },
  },
  textAlign: {
    textAlign: 'right',
  },
  button: {
    marginTop: 10,
  },
}))

const SchoolModal = ({ open: dialogOpen, onChange }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [school, setSchool] = React.useState(null)
  const handleChange = event => {
    setSchool(event.target.value)
  }
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      open={dialogOpen}
      classes={{ paper: classes.dialogPaper }}
    >
      <div className={classes.formControlContainer}>
        <FormControl
          fullWidth
          classes={{ paper: classes.paper, root: classes.formControl }}
        >
          <BootstrapInputLabel htmlFor="select-input-school-selection">
            نام مدرسه
          </BootstrapInputLabel>
          <Select
            autoWidth
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            value={school}
            onChange={handleChange}
            className={classes.menuItem}
            inputProps={{
              name: 'school',
              id: 'select-input-school-selection',
              style: { direction: 'rtl' },
            }}
          >
            {SCHOOLS.map((item, index) => (
              <MenuItem key={index} value={item} className={classes.textAlign}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          className={classes.button}
          onClick={() =>
            school !== null ? onChange(school) : Function.prototype
          }
        >
          تایید
        </Button>
      </div>
    </Dialog>
  )
}
export default SchoolModal

const BootstrapInputLabel = withStyles(() => ({
  formControl: {
    left: 'unset',
    right: 0,
    transition: 'none',
    transform: 'unset',
    color: '#000',
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 10,
  },
  shrink: {
    transformOrigin: 'top right',
  },
}))(InputLabel)
