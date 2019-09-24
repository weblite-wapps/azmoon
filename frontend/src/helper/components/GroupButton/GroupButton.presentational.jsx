import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import { Button, FormControlLabel, Radio } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
// helper
import { cns, ab } from '../../functions/utils.helper'

// style
const useStyles = makeStyles(theme => ({
  groupButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    borderRadius: 11,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#f0f0f0',
    color: '#818181',
    fontSize: 12,
    letterSpacing: '-0.08px',
    height: '100%',
    flexGrow: 2,
    marginRight: 3,
    transition: theme.transitions.create(['background-color']),
    '&:last-child': { marginRight: 0 },
    '&:hover': {
      backgroundColor: '#84CE2D',
      color: '#fff',
    },
  },
  buttonSelected: {
    backgroundColor: '#84CE2D',
    color: '#fff',
  },
}))

const GroupButton = ({ items, onChange }) => {
  const classes = useStyles()
  const [option, setOption] = React.useState(0)

  const chooseOption = index => {
    setOption(index)
    onChange(index)
  }

  return (
    <div className={classes.groupButton} dir="rtl">
      {items.map((item, index) => (
        <Button
          key={item.id}
          variant="text"
          className={cns(
            classes.button,
            ab(classes.buttonSelected)(option === index),
          )}
          onClick={() => chooseOption(index)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}

GroupButton.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func.isRequired,
}
GroupButton.defaultProps = {
  items: [
    { label: 'گزینه 1', id: '0' },
    { label: 'گزینه 2', id: '1' },
    { label: 'گزینه 3', id: '2' },
    { label: 'گزینه 4', id: '3' },
  ],
}

export default GroupButton
