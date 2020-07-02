import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function NewClientForm() {
  return (
    <form action="">
      <TextField id="cedula" variant="outlined" label="Cedula" />
      <TextField id="nombre" variant="outlined" label="Nombre" />
      <TextField id="apellido" variant="outlined" label="Apellido" />
      <TextField id="dirección" variant="outlined" label="Dirección" />
      <TextField id="telefono" variant="outlined" label="Telefono" />
    </form>
  );
}
