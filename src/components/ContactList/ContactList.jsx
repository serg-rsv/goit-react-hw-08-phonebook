import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { Contact } from 'components/Contact/Contact';
import { List } from './List.styled';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const { data } = useGetContactsQuery();

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => {
        return <Contact key={id} id={id} name={name} number={phone} />;
      })}
    </List>
  );
};
