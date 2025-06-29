import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Button({ text, to, link, icon, target = "_self" }) {
  if (to) {
    return (
      <Link to={to} className={styles.button}>
        {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
        {text}
      </Link>
    );
  }

  if (link) {
    return (
      <a href={link} className={styles.button} target={target}>
        {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
        {text}
      </a>
    );
  }

  return null;
}
