import styles from "./Home.module.css";
import banner from "../../assets/banner.jpg";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";

const Home = () => {
  const listPics = [pic1, pic2, pic3, pic4, pic5];
  return (
    <div className={styles.main_container}>
      <div className={styles.container_img}>
        <img src={banner} className={styles.img_banner} alt="banner_game" />
      </div>
      <div className={styles.container_text}>
        <h1>Jump Forest!</h1>
        <p>
          Jump into a colorful pixel world filled with adventure! In this
          retro-style platformer, you control a brave little hero on a quest to
          rescue the princess from the clutches of a mysterious villain. Run,
          jump, and dodge your way through tricky levels, collect shiny coins,
          and uncover hidden secrets along the way. Whether you're a seasoned
          gamer or just looking for some classic fun, this game is packed with
          action, charm, and challenge!
        </p>
      </div>
      <div className={styles.video_container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BpYfeR7p8yw?si=MxD6Y9E60jZB5wLh"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.container_card_pics}>
        {listPics.map((pic, index) => (
          <div key={index} className={styles.card}>
            <img src={pic} alt={`screenshot ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.container_div}>
        <iframe
          width="100%"
          height="166"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/145265976&color=%23584749&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div >
          <a
            href="https://soundcloud.com/andr-licks"
            title="André Licks"
            target="_blank"
          ></a>

          <a
            className={styles.ancor_div}
            href="https://soundcloud.com/andr-licks/musica1v3"
            title="Musica1v3"
            target="_blank"
          >
            Musica1v3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
