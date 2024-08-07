import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactDetails from './components/ContactDetails';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact/:id" element={<ContactDetails />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}

export default App;
