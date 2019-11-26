import React from 'react'
import PropTypes from 'prop-types'
import {
  Dialog,
  FormControl,
  Button,
} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
// component
import MySelect, { BootstrapInputLabel } from './MySelect.presentational'
// const
import cityMap from '../../../helper/consts/iran-cities'

const useStyles = makeStyles(theme => ({
  formControlContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  formControl: {
    position: 'relative',
    minWidth: 120,
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
  },
  dialogPaper: {
    margin: 5,
    width: 300,
    overflowX: 'hidden',
  },
  menuItem: {
    textAlign: 'right',
    border: '1px solid #ced4da',
    fontSize: 12,
    lineHeight: '21px',
    width: '100%',
    fontWeight: 500,
    letterSpacing: -0.08,
    borderRadius: 11,
    padding: '5px 10px',
    margin: '20px 0 !important',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade('rgb(128, 130, 133)', 0.5)} 0 0 0 0.1rem`,
      borderColor: 'rgb(128, 130, 133)',
    },
  },
}))

const provinces = Object.keys(cityMap)

const UserInfoModal = ({ open: dialogOpen, onSubmit, onSearchSchools, oldSchool }) => {
  const classes = useStyles()
  const [province, setProvince] = React.useState('تهران')
  const [county, setCounty] = React.useState('تهران')
  const [school, setSchool] = React.useState(oldSchool)
  const [schools, setSchools] = React.useState([])

  console.log(school)
  const changeProvince = value => {
    setProvince(value)
    setCounty(cityMap[value][0])
  }

  React.useEffect(() => {
    let active = true

    onSearchSchools(province, county)
      .then(results => active && setSchools(results || []))

    return () => {
      active = false
    }
  }, [province, county, onSearchSchools])

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth
      open={dialogOpen}
      classes={{ paper: classes.dialogPaper }}
    >
      <div className={classes.formControlContainer}>
        <MySelect
          name="province"
          label="استان"
          items={provinces}
          onChange={changeProvince}
          value={province} />

        <MySelect
          name="county"
          label="شهرستان"
          items={cityMap[province]}
          onChange={setCounty}
          value={county} />

        <FormControl
          fullWidth
          classes={{ root: classes.formControl }}
        >
          <BootstrapInputLabel htmlFor="autocomplete-school">
            مدرسه
          </BootstrapInputLabel>
          <Autocomplete
            id="autocomplete-school"
            classes={{
              inputRoot: classes.menuItem
            }}
            options={schools}
            autoComplete
            autoSelect
            includeInputInList
            freeSolo
            onChange={(e, v) => setSchool(e.target.value || v)}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="مدرسه خود را انتخاب کنید یا بنویسید"
                fullWidth
                onChange={e => setSchool(e.target.value)}
              />
            )}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={() => {
            if (school !== '')
              onSubmit({ province, county, school: school.trim() })
            }
          }
        >
          تایید
        </Button>
      </div>
    </Dialog>
  )
}

UserInfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  oldSchool: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSearchSchools: PropTypes.func.isRequired,
}

export default UserInfoModal
