import Contact from "../Contact/Contact.jsx";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
