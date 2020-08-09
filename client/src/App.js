import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Sales from './pages/Sales/Sales';
import Clients from './pages/Clients/Clients';
import Providers from './pages/Providers/Providers';
import Products from './pages/Products/Products';
import './App.scss';

// import Navbar from '././components/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import PageContainer from './components/PageContainer/PageContainer';
import theme from './theme';

function App() {
  const [menuHidden, setMenuHidden] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}
      <SideMenu hidden={menuHidden} setHidden={() => setMenuHidden(!menuHidden)} />
      <PageContainer menuHidden={menuHidden}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/sales" component={Sales} />
          <Route path="/clients" component={Clients} />
          <Route path="/providers" component={Providers} />
          <Route path="/products" component={Products} />
        </Switch>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
