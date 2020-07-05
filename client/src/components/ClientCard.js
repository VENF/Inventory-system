import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

import useWindowsDimensions from '../hooks/useWindowsDimensions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'flex',
    flexDirection: 'row',
    width: '100%;',
    justifyContent: 'space-between',
    marginTop: '0.6rem'
  },
  title: {
    fontSize: '0.8rem'
  },
  normal: {
    fontSize: '1rem',
    lineHeight: '1.1rem'
  }
});

export default function ClientCard(props) {
  const { width, height, isSmall } = useWindowsDimensions(600);
  const dimensions = {
    width,
    height,
    isSmall
  };
  const classes = useStyles(dimensions);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.cedula}
        </Typography>
        <Typography className={classes.normal} variant="h3" component="h2">
          {`${props.nombre} ${props.apellido}`}
        </Typography>
        <Typography className={classes.normal} color="secondary">
          {props.telefono}
        </Typography>
        <Typography className={classes.normal} color="textSecondary">
          {props.direccion}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <IconButton variant="contained" */}
        <IconButton edge="end" aria-label="edit">
          <EditIcon color="warning" />
        </IconButton>
        <IconButton edge="end" aria-label="delete" color="warning">
          <DeleteIcon color="warning" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
