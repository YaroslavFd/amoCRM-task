import styles from "./styles.module.scss";

export const Socials = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="/#">
          <img src="/images/icons/telegram.svg" alt="telegtam" />
        </a>
      </li>
      <li>
        <a href="/#">
          <img src="/images/icons/viber.svg" alt="telegtam" />
        </a>
      </li>
      <li>
        <a href="/#">
          <img src="/images/icons/whatsapp.svg" alt="telegtam" />
        </a>
      </li>
    </ul>
  );
};
