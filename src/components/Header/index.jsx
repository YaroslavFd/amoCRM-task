import { Socials } from "../../UI/Socials";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <div className={styles.imgBox}>
            <a href="/#">
              <img src="images/logo.svg" alt="logo" />
            </a>
            <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
          </div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/#">Услуги</a>
            </li>
            <li className={styles.navItem}>
              <a href="/#">Виджеты</a>
            </li>
            <li className={styles.navItem}>
              <a href="/#">Интеграции</a>
            </li>
            <li className={styles.navItem}>
              <a href="/#">Кейсы</a>
            </li>
            <li className={styles.navItem}>
              <a href="/#">Сертификаты</a>
            </li>
          </ul>
        </nav>
        <div className={styles.info}>
          <a href="tel:+7-555-555-55-55">+7 555 555-55-55</a>
          <Socials />
        </div>
      </div>
    </header>
  );
};
