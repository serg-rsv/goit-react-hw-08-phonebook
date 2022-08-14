import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactsView = () => {
  return (
    <>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
