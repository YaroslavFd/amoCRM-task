import { Socials } from "../../UI/Socials";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.about}>
            <h2 className={styles.title}>О компании</h2>
            <ul className={styles.list}>
              <li>
                <a href="/#">Партнёрская программа</a>
              </li>
              <li>
                <a href="/#">Вакансии</a>
              </li>
            </ul>
          </div>
          <div className={styles.menu}>
            <h2 className={styles.title}>Меню</h2>
            <ul className={styles.list}>
              <li>
                <a href="/#">Расчёт стоимости</a>
              </li>
              <li>
                <a href="/#">Услуги</a>
              </li>
              <li>
                <a href="/#">Виджеты</a>
              </li>
              <li>
                <a href="/#">Интеграции</a>
              </li>
              <li>
                <a href="/#">Наши клиенты</a>
              </li>
              <li>
                <a href="/#">Кейсы</a>
              </li>
              <li>
                <a href="/#">Благодарственные письма</a>
              </li>
              <li>
                <a href="/#">Сертификаты</a>
              </li>
              <li>
                <a href="/#">Блог на Youtube</a>
              </li>
              <li>
                <a href="/#">Вопрос / Ответ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <h2 className={styles.title}>Контакты</h2>
          <ul className={styles.list}>
            <li>
              <a href="tel:+7-555-555-55-55">+7 555 555-55-55</a>
            </li>
            <li>
              <Socials />
            </li>
            <li>
              <p>Москва, Путевой проезд 3с1, к 902</p>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>
        ©WELBEX 2022. Все права защищены.
        <a href="/#">Политика конфиденциальности</a>
      </p>
    </footer>
  );
};
