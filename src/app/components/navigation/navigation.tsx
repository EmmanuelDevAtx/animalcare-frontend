import styles from "./navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.topnav}>
      <div className={styles.container}>
        <a className={styles.active} href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};
