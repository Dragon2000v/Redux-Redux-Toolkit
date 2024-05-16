import Contact from './Contact';
import s from './Contacts.module.css';

const ContactList = ({ contactList, handleDeleteContact }) => {
  // console.log(contactList);
  return (
    <ul className={s.contactList}>
      {contactList.map(el => (
        <Contact
          handleDeleteContact={handleDeleteContact}
          key={el.id}
          contact={el}
        />
      ))}
    </ul>
  );
};

export default ContactList;
