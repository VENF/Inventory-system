import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            New Client
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
