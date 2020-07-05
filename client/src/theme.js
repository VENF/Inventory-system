import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      light: '#D1C4E9',
      main: '#673AB7',
      dark: '#512DA8'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#E91E63'
    },
    warning: {
      main: '#F44336'
    }
  }
});

export default theme;
