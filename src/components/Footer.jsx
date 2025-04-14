import styles from "./Footer.module.css";

const Footer = () => {
    const nowDate = () => {
      const date = new Date(); // Cria o objeto Date aqui primeiro
      const today = date.getDate();
      const currentMonth = date.getMonth() + 1;
      const currentYear = date.getFullYear();
  
      // Formata a data como dd/mm/yyyy
      return `${today.toString().padStart(2, '0')}/${currentMonth.toString().padStart(2, '0')}/${currentYear}`;
    };
  
    return (
      <footer className={styles.footer_container}>
        <span>&#169; </span>
        <span>By Gabriel_Balastrelli</span>
        <span>{nowDate()}</span>
      </footer>
    );
  };
  
  export default Footer;
  