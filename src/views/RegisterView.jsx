import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSignupMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

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
    <Box
      component="form"
      action="submit"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
          required
          size="small"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formState.email}
          required
          size="small"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={formState.password}
          required
          size="small"
        />
      </FormControl>
      <Button variant="outlined" type="submit" disabled={isLoading}>
        Register
      </Button>
    </Box>
  );
};

export default RegisterView;
