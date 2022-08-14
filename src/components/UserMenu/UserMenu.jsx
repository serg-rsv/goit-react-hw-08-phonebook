import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from 'redux/authApi';
import { selectUser, unsetCredentials } from 'redux/authSlice';
import { contactsApi } from 'redux/contactsApi';
import { Button } from 'styles/Button.styled';

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
    <li>
      <span>Logged in as {user.name} </span>
      <Button type="button" disabled={isLoading} onClick={handleClick}>
        Logout
      </Button>
    </li>
  );
};

export default UserMenu;
