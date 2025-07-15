import Header from "../../shared/ui/Header";
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <Header>
        <p className={styles.header__title}>Filter</p>
      </Header>

      <div className={styles.filter__category}>
        <h2>Category</h2>
        <ul>
          <li>
            <p>All</p>
          </li>
          <li>
            <p>Vegetable</p>
          </li>
          <li>
            <p>Fruit</p>
          </li>
          <li>
            <p>Drink</p>
          </li>
          <li>
            <p>Cookes</p>
          </li>
        </ul>
      </div>
      <div className={styles.price_range}>
        <h2>Price Range</h2>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.filter__reviews}>
        
      </div>
    </div>
  );
};

export default Filter;
