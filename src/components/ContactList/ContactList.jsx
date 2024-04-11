import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const nameFiter = useSelector(selectNameFilter);

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFiter.toLowerCase())
  );
  return (
    <ul className={css.contactListMain}>
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact key={contact.id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
