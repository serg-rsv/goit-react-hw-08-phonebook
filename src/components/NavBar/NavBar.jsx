import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authSlice';
import AuthBar from 'components/AuthBar/AuthBar';
import UserMenu from 'components/UserMenu/UserMenu';

import { Header } from './NavBar.styled';

const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          {isLoggedIn ? <UserMenu /> : <AuthBar />}
        </ul>
      </nav>
    </Header>
  );
};

export default NavBar;
