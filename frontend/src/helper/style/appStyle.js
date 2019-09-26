export default theme => ({
  container: {
    margin: '10px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
  },
  textFieldFormLabel: {
    color: '#919191',
  },
  textFieldInkbar: {
    '&:after': {
      backgroundColor: '#919191',
    },
  },
})
