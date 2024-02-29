import data from "../data";
import styles from "../styles/hero.module.css";
import Cards from "./Cards";

function Hero() {
  return (
    <div className={styles.hero}>
      {data.map((item, index) => (
        <Cards item={item} key={index} />
      ))}
    </div>
  );
}

export default Hero;
