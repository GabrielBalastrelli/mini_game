import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container_about}>
      <h1 className={styles.container_title}>About this Project</h1>
      <p>
        This is a mini project developed as part of a college assignment for the
        end of the semester. It combines the study of web development with the
        world of games, and emphasizes the use of low-code techniques.
      </p>
      <p>
        The main goal of this project is to showcase the creation of a
        retro-style platformer game that integrates web technologies like HTML,
        CSS, and JavaScript to deliver an appealing and interactive experience.
        The game, called "Jump Forest," follows a brave little hero navigating
        through colorful pixelated landscapes to rescue a princess from a
        mysterious villain.
      </p>
      <p>
        By combining game design and web development, the project explores how
        interactive elements can be brought to life using basic web development
        techniques and minimal coding. Responsive design ensures the game runs
        smoothly on various devices, providing an enjoyable user experience on
        both desktop and mobile platforms.
      </p>
      <p>
        This project serves as a great example of how low-code solutions can be
        leveraged to rapidly develop prototypes and functional applications.
        It's an ideal project for demonstrating how even minimal technical
        skills can create an engaging and visually interesting product.
      </p>
    </div>
  );
};

export default About;
