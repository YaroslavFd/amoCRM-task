import { Button } from "../../UI/Button";

import styles from "./styles.module.scss";

export const Content = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <h1 className={styles.title}>
            Зарабатывайте больше
            <span> с WELBEX</span>
          </h1>
          <p>Развиваем и контролируем продажи за вас</p>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>
            Вместе с <span>бесплатной консультацией </span>
            мы дарим:
          </h2>
          <ul className={styles.list}>
            <li>
              <h3>Виджеты</h3>
              <p>30 готовых решений</p>
            </li>
            <li>
              <h3>Skype Аудит</h3>
              <p>отдела продаж и CRM системы</p>
            </li>
            <li>
              <h3>Dashboard</h3>
              <p>с показателями вашего бизнеса</p>
            </li>
            <li>
              <h3>35 дней</h3>
              <p>использования CRM</p>
            </li>
          </ul>

          <ul className={styles.mobileList}>
            <li>
              <p>Skype аудит</p>
            </li>
            <li>
              <p>30 виджетов</p>
            </li>

            <li>
              <p>Dashboard</p>
            </li>
            <li>
              <p>Месяц аmoCRM</p>
            </li>
          </ul>
          <Button>Получить консультацию</Button>
        </div>
      </div>
      <img
        className={styles.redBall}
        src="/images/redBall.png"
        alt="decor"
        aria-hidden
      />
      <img
        className={styles.purpleBall}
        src="/images/purpleBall.png"
        alt="decor"
        aria-hidden
      />
      <img
        className={styles.redBallSmall}
        src="/images/redBall.png"
        alt="decor"
        aria-hidden
      />
      <div className={styles.purpleBlur}></div>
      <div className={styles.redBlur}></div>
    </main>
  );
};
