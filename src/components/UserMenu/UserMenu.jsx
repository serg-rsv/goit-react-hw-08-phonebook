import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/authApi';
import { selectUser, unsetCredentials } from 'redux/authSlice';
import { contactsApi } from 'redux/contactsApi';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserMenu = () => {
  const dispatch = useDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  const user = useSelector(selectUser);

  const handleClick = async () => {
    await logout();
    dispatch(unsetCredentials());
    dispatch(contactsApi.util.resetApiState());
  };

  return (
    <>
      <Typography component="span">{user.email}</Typography>

      <Button disabled={isLoading} onClick={handleClick}>
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
