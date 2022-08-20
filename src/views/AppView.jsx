import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import NavBar from '../components/NavBar/NavBar';

const AppView = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </>
  );
};

export default AppView;
