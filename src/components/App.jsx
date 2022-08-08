import { Routes, Route } from 'react-router-dom';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppBar } from './AppBar/AppBar';

import { useGetContactsQuery } from 'redux/contactsApi';

import { GlobalStyle } from 'styles/GlobalStyle';
import { TitleMain, TitleSecond } from 'styles/Titles.styled';
import { Section } from 'styles/Section.styled';

export const App = () => {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <Section>
      <GlobalStyle />
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
      {/* <TitleMain>Phonebook</TitleMain>
      <ContactForm />
      <TitleSecond>Contacts</TitleSecond>
      <Filter />
      {isLoading ? (
        <p className="message">Loading...</p>
      ) : data.length > 0 ? (
        <ContactList />
      ) : (
        <p className="message">Contacts list is empty</p>
      )} */}
    </Section>
  );
};
