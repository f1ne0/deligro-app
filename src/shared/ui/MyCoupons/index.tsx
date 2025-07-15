import styles from "./MyCoupons.module.scss";
import Header from "../Header";
const MyCoupons = () => {
  const couponItems = Array.from({ length: 3 });

  return (
    <div className={styles.coupons}>
      <Header>
        <p className={styles.header__title}>My Coupons</p>
      </Header>

      <p className={styles.best__offer}>Best offer for you</p>

      <ul className={styles.coupons__list}>
        {couponItems.map(() => (
          <li className={styles.coupon}>
            <div className={styles.coupon__wrapper}>
              <div className={styles.coupon__about}>
                <p className={styles.coupon__title}>WELCOME200</p>
                <p className={styles.coupon__desc}>
                  Add items worth <span>50.000</span> swm to unlock
                </p>
                <div className={styles.coupon__discount}>
                  <img src="./discount-shape-red.svg" alt="" />
                  <p>Up to -15%</p>
                </div>
              </div>
              <span className={styles.copycode}>COPY CODE</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCoupons;
