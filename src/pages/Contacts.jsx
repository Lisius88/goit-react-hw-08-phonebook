import { Form } from '../components/Form/Form';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../components/redux/operations';
import { MainContent, Title, Flex } from '../components/App.styled';
import { Notif } from 'components/Notif/Nitif';
// import { Loader } from '../components/Loader/Loader';
import { useEffect } from 'react';

export default function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContent>
      <Title>Phonebook</Title>
      {contacts.length === 0 && <Notif />}
      <Flex>
        {contacts.length > 0 && <Filter />}
        <Form />
      </Flex>
      <ContactsList />
    </MainContent>
  );
}
