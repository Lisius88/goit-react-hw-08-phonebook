import {
  List,
  Item,
  Button,
  Notiffication,
  NotifficationContainer,
  Numb,
} from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { useDispatch } from 'react-redux';
import { contactsIsEmpty } from 'components/redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const onDeleteClick = e => {
    const idToDelete = e.currentTarget.id;
    dispatch(deleteContact(idToDelete));
  };
  const contacts = useSelector(state => state.contacts.items);
  // const isLoading = useSelector(state => state.contacts.isLoading);
  const contactsFilter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(contactsFilter)
  );

  const contactsListEmpty = useSelector(contactsIsEmpty);

  if (!contactsListEmpty && filteredContacts.length === 0) {
    return (
      <NotifficationContainer>
        <Notiffication>No contacts with such name found</Notiffication>
      </NotifficationContainer>
    );
  }

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <div>
            {' '}
            <p style={{ fontSize: '18px' }}>{name}</p>
            <p>
              <Numb href={`tel:${number}`}>{number}</Numb>
            </p>
          </div>
          <Button onClick={onDeleteClick} type="button" id={id} name={name}>
            x
          </Button>
        </Item>
      ))}
    </List>
  );
};
