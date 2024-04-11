import React from "react";
import { useState, useEffect } from "react";
import "./App.module.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const initialValues = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContact = JSON.parse(localStorage.getItem("saved-contact"));
    return savedContact ? savedContact : initialValues;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const searchBar = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className={css.mainContainer}>
      <div>
        <h1 className={css.mainText}>Phonebook</h1>
        <ContactForm initialValues={initialValues} onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={searchBar} onDelete={deleteContact} />
      </div>
    </div>
  );
};

export default App;
