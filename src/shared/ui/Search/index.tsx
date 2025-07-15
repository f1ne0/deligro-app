import Header from "../Header";
import styles from "./Search.module.scss";

const Search = () => {
  // const recentViewItems = Array.from({ length: 3 });
  const searchItems = Array.from({ length: 3 });

  return (
    <div className={styles.search}>
      <Header>
        <div className={styles.input_wrapper}>
          <img src="/search-normal.svg" alt="" />
          <input type="text" placeholder="Search" />
          <img src="/clear-btn.svg" alt="" />
        </div>
      </Header>
      {/* <div className={styles.recent_search}>
        <h2>Recent Search</h2>
        <ul className={styles.recent_search__list}>
          <li className={styles.item}>
            <p className={styles.item_title}>Orange Juice</p>
            <img src="./close-btn.svg" alt="" />
          </li>
          <li className={styles.item}>
            <p className={styles.item_title}>Chocolate Buscuit</p>
            <img src="./close-btn.svg" alt="" />
          </li>
          <li className={styles.item}>
            <p className={styles.item_title}>Tomato</p>
            <img src="./close-btn.svg" alt="" />
          </li>
        </ul>
      </div>
      <div className={styles.recent_view}>
        <h2>Recent View</h2>
        <ul className={styles.recent_view__list}>
          {recentViewItems.map(() => (
            <li className={styles.item}>
              <span className={styles.item_img}>
                <img src="./grape.svg" alt="" />
              </span>
              <div className={styles.item__info}>
                <p className={styles.title}>Grape</p>
                <p className={styles.weight}>1 Kg</p>
                <p className={styles.price}>12.000 swm</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <div className={styles.search_page}>
        <div className={styles.results_info}>
          <p className={styles.results_info__title}>Results for “Grape”</p>
          <span className={styles.results_info__count}>3 Results Found</span>
        </div>

        <ul className={styles.search_list}>
          {searchItems.map(() => (
            <li className={styles.item}>
              <div className={styles.item_img}>
                <img src="./grape.svg" alt="" />
                <span className={styles.favorite_btn}>
                  <img src="/heart.svg" alt="heart" />
                </span>
              </div>

              <div className={styles.info}>
                <div className={styles.info__top}>
                  <p className={styles.info__title}>Grape</p>
                  <div className={styles.rating}>
                    <img src="/star.svg" alt="" />
                    <span className={styles.rating_count}>4.9</span>
                  </div>
                </div>
                <span className={styles.price}>12.000 swm</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
