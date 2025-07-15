import styles from "./Notification.module.scss";
import Header from "../Header";
const Notification = () => {
  const notificationItems = Array.from({ length: 3 });

  return (
    <div className={styles.notifications}>
      <Header>
        <p className={styles.header__title}>Notification</p>
      </Header>

      <div className={styles.notifications__panel_top}>
        <p className={styles.notifications__time}>TODAY</p>
        <p className={styles.notifications__all_read}>Mark all as read</p>
      </div>

      <ul className={styles.list}>
        {notificationItems.map(() => (
          <li className={styles.item}>
            <span className={styles.item__img}>
              <img src="/notification/truck.svg" alt="" />
            </span>
            <span className={styles.item__received_date}>1h</span>
            <div className={styles.about}>
              <p className={styles.status}>Order Shipped</p>
              <p className={styles.description}>
                We have brought you the products, could you please rate our
                service?
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.notifications__panel_bottom}>
        <p className={styles.notifications__time}>YESTERDAY</p>
      </div>

      <ul className={styles.list}>
        {notificationItems.map(() => (
          <li className={styles.item}>
            <span className={styles.item__img}>
              <img src="/notification/truck.svg" alt="" />
            </span>
            <span className={styles.item__received_date}>1h</span>
            <div className={styles.about}>
              <p className={styles.status}>Order Shipped</p>
              <p className={styles.description}>
                We have brought you the products, could you please rate our
                service?
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
