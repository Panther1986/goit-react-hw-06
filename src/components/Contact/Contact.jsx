import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={css.contactMainConteiner}>
        <p className={css.contacText}>
          <IoPerson /> {name}
        </p>
        <p className={css.contacNumber}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
