import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';

import NewClientForm from '../../components/NewClientForm';
import ClientCard from '../../components/ClientCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import clientList, { addClient } from './clientList';
import './Clients.scss';

const nuClient = {
  cedula: '26885431',
  nombre: 'Lula',
  apellido: 'Naranjo',
  direccion: 'Mi corazoncito',
  telefono: '0412-xxxxxxx'
};

export default function NewClient() {
  const [clients, setClients] = useState([...clientList]);

  const addNewClient = () => {
    setClients([...clients, nuClient]);
  };

  return (
    <Fragment>
      {/* <p>There is no clients yet...</p> */}
      <div className="action-bar">
        <SearchBar />
        <Button
          className="action-bar_btn"
          onClick={addNewClient}
          variant="outlined"
          color="primary"
        >
          Add
        </Button>
      </div>
      <div className="client-list">
        {clientList &&
          clients.map((client) => {
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
