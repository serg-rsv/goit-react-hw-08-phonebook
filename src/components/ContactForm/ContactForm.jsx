import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        console.log('Wrong field name');
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizeName = name.toLowerCase();
    const isExist = contacts
      .map(contact => contact.name)
      .some(name => name.toLowerCase() === normalizeName);

    if (isExist) {
      alert(`${name} is already in contacts.`);

      return;
    }

    addContact({ name, number });

    setName('');
    setNumber('');
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
      noValidate
    >
      <FormControl>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          required
          size="small"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="numbere">Number</InputLabel>
        <Input
          id="number"
          name="number"
          value={number}
          onChange={handleChange}
          type="tel"
          required
          size="small"
        />
      </FormControl>
      <Button
        type="submit"
        onSubmit={handleSubmit}
        variant="outlined"
        disabled={isLoading}
      >
        Add contact
      </Button>
    </Box>
  );
};
