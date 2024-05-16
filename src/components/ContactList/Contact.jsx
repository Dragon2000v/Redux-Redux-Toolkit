import Button from '../Button/Button';
import { FaPhone } from 'react-icons/fa6';
import { BiSolidContact } from 'react-icons/bi';
import s from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactListItem}>
      <div className={s.contactInfo}>
        <div className={s.contactDetails}>
          <div className={s.contactIcons}>
            <BiSolidContact className={s.icon} />
            <h2 className={s.contactName}>{contact.name}</h2>
          </div>
          <div className={s.contactIcons}>
            <FaPhone className={s.icon} />
            <p className={s.contactNumber}>{contact.number}</p>
          </div>
        </div>
        <Button
          className={s.contactDeleteBtn}
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default Contact;
