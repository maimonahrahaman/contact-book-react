import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure you import the CSS file

function Home() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const contactsCollection = collection(db, 'contacts');
      const contactsSnapshot = await getDocs(contactsCollection);
      const contactsList = contactsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Sort contacts alphabetically by last name
      contactsList.sort((a, b) => a.lastName.localeCompare(b.lastName));
      
      setContacts(contactsList);
    };
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <h1>Contacts</h1>
        <Link to="/add">+</Link>
      </div>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search contacts" 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
        />
      </div>
      <ul className="contacts-list">
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
