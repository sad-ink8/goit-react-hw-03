import css from "../Contact/Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div>
      <p className={css.contactName}>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
