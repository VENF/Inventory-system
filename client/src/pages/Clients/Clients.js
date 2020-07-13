import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

import NewClientForm from '../../components/NewClientForm';
import ClientCard from '../../components/ClientCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Clients.scss';

const clientList = [
  {
    cedula: '26496096',
    nombre: 'Raúl',
    apellido: 'Chirinos',
    direccion: 'P Sherman, Calle Wannaby 42. Sidney',
    telefono: '04126670532'
  },
  {
    cedula: '1965340',
    nombre: 'Rosa',
    apellido: 'Durán',
    direccion: 'Houston TX, 1340',
    telefono: '02692484318'
  },
  {
    cedula: '26885430',
    nombre: 'Victor',
    apellido: 'Naranjo',
    direccion: 'CABA Belgrano, P45007',
    telefono: '0412-xxxxxxx'
  }
];

export default function NewClient() {
  return (
    <Fragment>
      {/* <p>There is no clients yet...</p> */}
      <div className="action-bar">
        <SearchBar />
        <Button variant="outlined" color="primary">
          Add
        </Button>
      </div>
      <div className="client-list">
        {clientList &&
          clientList.map((client) => {
            return (
              <ClientCard
                cedula={client.cedula}
                nombre={client.nombre}
                apellido={client.apellido}
                direccion={client.direccion}
                telefono={client.telefono}
              />
            );
          })}
      </div>
      {/* <Button variant="contained" color="primary">
        New Client
      </Button> */}
    </Fragment>
  );
}
