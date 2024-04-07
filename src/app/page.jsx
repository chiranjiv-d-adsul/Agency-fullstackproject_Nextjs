import React from "react";
import styles from "./homePage.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex
          aperiam soluta magnam ad sapiente quas officiis praesentium, debitis
          libero.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" fill className={styles.brandImg} alt="brands" />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" fill className={styles.homeImg} alt="home" />
      </div>
    </div>
  );
};

export default Home;
