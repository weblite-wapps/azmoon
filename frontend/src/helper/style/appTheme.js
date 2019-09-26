import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

export default createMuiTheme({
  palette: {
    darkGray: 'rgb(128, 130, 133)',
    primary: grey,
  },
  typography: {
    // TODO: should remove in next version (v4)
    useNextVariants: true,
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'iranyekan',
        textOverflow: 'ellipsis',
        fontWeight: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        direction: 'rtl',
      },
      body2: {
        color: '#808285',
        fontSize: '12px',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '42px',
        color: '#808285',
      },
      h4: {
        fontSize: '16px',
        lineHeight: '28px',
        fontWeight: 'Bold',
        color: '#FFFFFF',
      },
      h5: {
        color: 'white',
        fontSize: '18px',
      },
      h6: {
        fontSize: '18px',
        textTransform: 'uppercase',
        fontWeight: '900',
      },
      caption: {
        color: '#ccc',
        marginBottom: '-10px',
        fontSize: '8px',
      },
      subtitle1: {
        fontSize: '12px',
        color: 'black',
      },
      subtitle2: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#808285',
      },
    },
    MuiIconButton: {
      root: {
        height: '30px',
        width: '30px',
        padding: '0',
        color: '#000000',
      },
    },
    MuiDialog: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        top: '52px',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
    },
    MuiTab: {
      root: {
        height: '50px',
      },
    },
    MuiTabIndicator: {
      root: {
        height: '5px',
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: 'white',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#000000',
        margin: '5px 30px',
      },
      middle: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginLeft: '5px',
        marginRight: '5px',
      },
      inset: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: '10px 60px 10px 0px',
        marginLeft: '0px',
      },
      absolute: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: '10px 30px 10px 0px',
        marginLeft: '0px',
      },
      light: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin: '20px 0px',
      },
    },
    MuiList: {
      root: {
        width: '100%',
        margin: '5px 0px 0px 0px',
      },
    },
    MuiListItem: {
      default: {
        paddingTop: '0px',
        paddingBottom: '0px',
      },
      dense: {
        paddingLeft: '30px',
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        paddingRight: '20px',
      },
    },
    MuiBadge: {
      badge: {
        backgroundColor: '#519ae7',
        color: 'white',
        top: 'unset',
        right: '10px',
        bottom: '5px',
        fontSize: '0.5rem',
        width: '21px',
        height: '21px',
      },
    },
    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: '#505050',
      },
      colorPrimary: {
        backgroundColor: '#919191',
      },
    },
    MuiAvatar: {
      root: {
        width: '35px',
        height: '35px',
      },
    },
    MuiToolbar: {
      root: {
        justifyContent: 'space-between',
      },
      regular: {
        minHeight: '45px',
      },
    },
    MuiFormControl: {
      root: {
        marginTop: '10px',
      },
    },

    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#EDCB19',
      },
    },
    MuiPickersDay: {
      isSelected: {
        backgroundColor: '#EDCB19',
      },
      daySelected: {
        backgroundColor: '#EDCB19',
      },
    },
    MuiInput: {
      underline: {
        '&::after, &::before': {
          display: 'none',
        },
      },
    },
    MuiButton: {
      contained: {
        borderRadius: '11px',
      },
    },
  },
})
