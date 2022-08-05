import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useGetContactsQuery } from 'redux/contactsApi';
import { GlobalStyle } from 'styles/GlobalStyle';
import { TitleMain, TitleSecond } from 'styles/Titles.styled';
import { Section } from 'styles/Section.styled';

export const App = () => {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <Section>
      <GlobalStyle />
      <TitleMain>Phonebook</TitleMain>
      <ContactForm />
      <TitleSecond>Contacts</TitleSecond>
      <Filter />
      {isLoading ? (
        <p className="message">Loading...</p>
      ) : data.length > 0 ? (
        <ContactList />
      ) : (
        <p className="message">Contacts list is empty</p>
      )}
    </Section>
  );
};
