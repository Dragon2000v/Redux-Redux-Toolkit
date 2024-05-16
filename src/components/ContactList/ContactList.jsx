import { useSelector } from 'react-redux';
import Contact from './Contact';
import s from './Contacts.module.css';
import { selectFilter } from '../../redux/filterSlice';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(el => (
        <Contact key={el.id} contact={el} />
      ))}
    </ul>
  );
};

export default ContactList;
