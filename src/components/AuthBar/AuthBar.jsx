import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

const AuthBar = ({ handleCloseNavMenu }) => {
  return (
    <>
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <Link to="login" style={{ textDecoration: 'none', color: '#fff' }}>
          Login
        </Link>
      </Button>
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <Link to="register" style={{ textDecoration: 'none', color: '#fff' }}>
          Register
        </Link>
      </Button>
    </>
  );
};

AuthBar.propTypes = {
  handleCloseNavMenu: propTypes.func.isRequired,
};

export default AuthBar;
