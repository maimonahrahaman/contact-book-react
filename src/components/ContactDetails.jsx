import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../db';
import '../App.css'; // Ensure you import the CSS file

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, 'contacts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'contacts', id));
    navigate('/');
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="contact-details-container">
      <div className="contact-header">
        <Link to="/">{"< Contacts"}</Link>
        <Link to={`/edit/${id}`}>Edit</Link>
      </div>
      <h1>{contact.firstName} {contact.lastName}</h1>
      <div className="contact-info">
        <div>
          <label>Email</label>
          <br></br>
          <span>{contact.email}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
