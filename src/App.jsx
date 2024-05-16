import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import { useLocalStorage } from './components/hooks/useLocalStorage';

function App() {
  const [contactList, setContactList] = useLocalStorage('contactList', []);
  const [searchStr, setSearchStr] = useLocalStorage('searchStr', '');

  const addContactData = date => {
    const modData = { ...date, id: nanoid() };
    setContactList(prev => [...prev, modData]);
  };

  const handleDeleteContact = id => {
    setContactList(prev => prev.filter(item => item.id !== id));
  };

  const filteredContact = contactList.filter(item =>
    item.name.toLowerCase().includes(searchStr.toLowerCase())
  );

  return (
    <>
      <h1 className="title">Phone book</h1>
      <ContactForm addContactData={addContactData} />
      <SearchBox setSearchStr={setSearchStr} />
      <ContactList
        contactList={filteredContact}
        handleDeleteContact={handleDeleteContact}
      />
    </>
  );
}

export default App;
