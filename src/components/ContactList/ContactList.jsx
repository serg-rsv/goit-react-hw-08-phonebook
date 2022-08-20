import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApi';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const filterQuery = useSelector(state => state.filter);
  const { data } = useGetContactsQuery();

  const normalizeFilter = filterQuery.toLowerCase();
  const filteredContacts =
    data?.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    ) ?? [];

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
