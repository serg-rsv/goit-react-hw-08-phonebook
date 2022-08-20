import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { CommonModal } from 'components/CommonModal/CommonModal';

const ContactsView = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAdd = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Filter />
        <IconButton
          type="button"
          onClick={handleOpenAdd}
          aria-label="Add contact"
        >
          <PersonAddIcon />
        </IconButton>
      </Toolbar>

      <ContactList />
      <CommonModal open={isOpen} handleClose={() => setIsOpen(false)}>
        <ContactForm />
      </CommonModal>
    </>
  );
};

export default ContactsView;
