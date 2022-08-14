import { NavLink } from 'react-router-dom';

const AuthBar = () => {
  return (
    <>
      <li>
        <NavLink to="login">Login</NavLink>
      </li>
      <li>
        <NavLink to="register">Register</NavLink>
      </li>
    </>
  );
};

export default AuthBar;
