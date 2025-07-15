import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.nav__list}>
        <li>
          <img src="/footer/home.svg" alt="" />
          <p>Home</p>
        </li>
        <li>
          <img src="/footer/cart.svg" alt="" />
          <p>My Cart</p>
        </li>
        <li>
          <img src="/footer/heart.svg" alt="" />
          <p>Favourite</p>
        </li>
        <li>
          <img src="/footer/order.svg" alt="" />
          <p>My Order</p>
        </li>
        <li>
          <img src="/footer/profile.svg" alt="" />
          <p>Profile</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
