import { Outlet } from 'react-router-dom';
import { Container } from 'styles/Container.styled';
import { Section } from 'styles/Section.styled';

import NavBar from '../components/NavBar/NavBar';

const AppView = () => {
  return (
    <Container>
      <NavBar />
      <Section>
      <Outlet />
      </Section>
    </Container>
  );
};

export default AppView;
