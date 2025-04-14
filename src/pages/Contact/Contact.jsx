import styles from "./Contact.module.css";

import gitHub from "../../assets/git.png";
import email from "../../assets/email.png";

const Contact = () => {
  return (
    <div className={styles.container_contacts}>
      <h1>More on GitHub!</h1>
      <div className={styles.list_contacts}>
        <a href="https://github.com/GabrielBalastrelli">
          <img src={gitHub} alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
