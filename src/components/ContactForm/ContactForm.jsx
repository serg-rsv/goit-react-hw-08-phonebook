import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const patternNumber =
  '^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$';
const patternName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const regexName = new RegExp(patternName);
const regexNumber = new RegExp(patternNumber);

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [validName, setvalidName] = useState(true);
  const [validNumber, setValidNumber] = useState(true);
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        setvalidName(regexName.test(value));
        break;
      case 'number':
        setNumber(value);
        setValidNumber(regexNumber.test(value));
        break;

      default:
        console.log('Wrong field name');
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validName || !validNumber) return;

    if (!name.trim() || !number.trim()) {
      alert(`Empty filed. Enter smomething.`);
      return;
    }

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
        <TextField
          label="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          required
          size="small"
          error={!validName}
          helperText={
            !validName &&
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          }
        />
      </FormControl>
      <FormControl>
        <TextField
          name="number"
          label="Number"
          value={number}
          onChange={handleChange}
          type="tel"
          required
          size="small"
          error={!validNumber}
          helperText={
            !validNumber &&
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          }
        />
      </FormControl>
      <Button type="submit" variant="outlined" disabled={isLoading}>
        Add contact
      </Button>
    </Box>
  );
};
