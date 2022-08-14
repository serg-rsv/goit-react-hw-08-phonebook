import { Form } from 'components/ContactForm/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSignupMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
import { Button } from 'styles/Button.styled';

const RegisterView = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const [singup, { isLoading }] = useSignupMutation();

  const handleChange = ({ target: { name, value } }) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const user = await singup(formState).unwrap();

      dispatch(setCredentials(user));
    } catch (error) {
      console.log('Oh no, there was an register error!', error);
    }

    setFormState({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <Form
      action="submit"
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
        />
      </label>
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
      <Button type="submit" disabled={isLoading}>
        Login
      </Button>
    </Form>
  );
};

export default RegisterView;
