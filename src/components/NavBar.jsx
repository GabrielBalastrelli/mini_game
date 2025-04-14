import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav_container}>
      <NavLink to="/"  className={styles.nav_container_img}>
         
      <img className={styles.nav_img} src="src\assets\logo.png" alt="Logo" /> 
      </NavLink>
      <ul className={styles.nav_unorderedlist}>
        <li className={styles.nav_list}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.nav_list}>
          <NavLink
            to="/play"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Play
          </NavLink>
        </li>
        <li className={styles.nav_list}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        <li className={styles.nav_list }>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
