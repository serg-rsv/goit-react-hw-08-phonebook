import { useState } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const { data: contacts } = useGetContactsQuery();
//   const [addContact, { isLoading }] = useAddContactMutation();

//   const handleChange = e => {
//     switch (e.target.name) {
//       case 'name':
//         setName(e.target.value);
//         break;
//       case 'number':
//         setNumber(e.target.value);
//         break;

//       default:
//         console.log('Wrong field name');
//         break;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     const normalizeName = name.toLowerCase();
//     const isExist = contacts
//       .map(contact => contact.name)
//       .some(name => name.toLowerCase() === normalizeName);

//     if (isExist) {
//       alert(`${name} is already in contacts.`);

//       return;
//     }

//     addContact({ name, number });

//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={handleChange}
//         />
//       </label>

//       <button type="submit" disabled={isLoading}>
//         Add contact
//       </button>
//     </form>
//   );
// };

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
