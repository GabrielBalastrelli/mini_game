import styles from "./Play.module.css";

const Play = () => {
  return (
    <div className={styles.container_main}>
      <h1>Aprecie nosso mini game!</h1>
      <iframe
        src="game/index.html"
        width="800"
        height="600"
        frameborder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Play;
