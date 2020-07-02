import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

import NewClientForm from '../components/NewClientForm';

export default function NewClient() {
  return (
    <Fragment>
      <p>There is no clients yet...</p>
      <Button variant="contained" color="primary">
        New Client
      </Button>
    </Fragment>
  );
}
