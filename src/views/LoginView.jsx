import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';

// import { Button } from 'styles/Button.styled';
// import { Form } from 'components/ContactForm/Form.styled';

const LoginView = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = ({ target: { name, value } }) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const respData = await login(formState).unwrap();

      dispatch(setCredentials(respData));
    } catch (error) {
      console.log('Oh no, there was an login error!', error);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="submit"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formState.email}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formState.password}
        />
      </label>
      <button type="submit" disabled={isLoading}>
        Login
      </button>
    </form>
  );
};

export default LoginView;
