import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import s from './Contact.module.css';

const Contact = ({ item, onDelete }) => {
  const { name, number, id } = item;
  return (
    <>
      <li className={s.li_wrapper}>
        <div>
          <h3>
            <IoPerson />
            {name}
          </h3>
          <p>
            <a href={`tel:+${number}`}>
              <FaPhone />
              {number}
            </a>
          </p>
        </div>

        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    </>
  );
};

export default Contact;

{
  /* {contactsList.map(({ id, name, number }) => (
  <li key={id}>
    <h2>{name}</h2>
    <p>{number}</p>
  </li>
))} */
}
