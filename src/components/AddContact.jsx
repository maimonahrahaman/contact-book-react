import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../db';
import '../App.css'; // Ensure you import the CSS file

function AddContact() {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'contacts'), contact);
    navigate('/');
  };

  return (
    <div className="add-contact-container">
      <div className="add-header">
        <Link to="/">{"< Contacts"}</Link>
      </div>
      <h1>New Contact</h1>
      <form onSubmit={handleSubmit} className="add-contact-form">
        <div className="form-row">
          <input 
            type="text" 
            name="firstName" 
            value={contact.firstName} 
            onChange={handleChange} 
            placeholder="First Name" 
          />
          <input 
            type="text" 
            name="lastName" 
            value={contact.lastName} 
            onChange={handleChange} 
            placeholder="Last Name" 
          />
        </div>
        <input 
          type="email" 
            name="email" 
            value={contact.email} 
            onChange={handleChange} 
            placeholder="Email" 
          />
        <div>
          <button type="submit" className="add-button">Add Contact</button>
          <Link to="/" className="cancel-button">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
