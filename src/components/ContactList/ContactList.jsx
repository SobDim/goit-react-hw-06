import Contact from './Contact/Contact';

const ContactList = ({ contactsList, onDelete }) => {
  if (!contactsList.length) {
    return <h2>No Data</h2>;
  }
  return (
    <ul>
      {contactsList.map(contactItem => (
        <Contact key={contactItem.id} item={contactItem} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
