import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo" height={150} width={150} />
      </div>
      <div className={styles.textContainer}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor
        doloribus nihil adipisci ipsum quae quis fugit quaerat quo maiores,
        dignissimos consectetur sunt cupiditate rerum omnis iste fuga
        perspiciatis consequuntur. Facere, sint blanditiis libero corrupti
        voluptatum mollitia quaerat a, provident commodi necessitatibus fuga
        iure natus. Esse nostrum eveniet veniam incidunt.
      </div>
    </div>
  );
};

export default Footer;
