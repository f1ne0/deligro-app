import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Footer from "../widgets/Footer/ui";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const slides = Array.from({ length: 5 });
  const fruitItems = Array.from({ length: 4 });
  const categoryItems = Array.from({ length: 4 });
  const discountItems = Array.from({ length: 5 });
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="location">
            <p>Location:</p>
            <span>
              <img src="/location.svg" alt="location" />
              <p>Shimbay, 11A</p>
            </span>
          </div>

          <ul className="notifications">
            <li onClick={() => navigate("/discount")}>
              <img src="/discount-shape.svg" alt="" />
            </li>
            <li onClick={() => navigate("/notification")}>
              <img src="/notification-bing.svg" alt="" />
            </li>
          </ul>
        </header>
      </div>

      <div className="container">
        <section className="filter">
          <div className="input_wrapper" onClick={() => navigate("/search")}>
            <img src="/search-normal.svg" alt="" />
            <input type="text" placeholder="Search Food, Drinks, etc" />
          </div>
          <button onClick={() => navigate("/filter")}>
            <img src="/setting-4.svg" alt="" />
          </button>
        </section>
      </div>

      <section className="banner">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-item">
                <img className="img-1" src="/special-offers.svg" alt="" />
                <img className="img-2" src="/cherry.svg" alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="container">
        <section className="category">
          <div className="category__header">
            <p>Category</p>
            <span>See all</span>
          </div>
          <ul className="category__list">
            {categoryItems.map(() => (
              <li>
                <span>
                  <img src="vegetable.png" alt="" />
                </span>
                <p>Vegetable</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="discount">
        <p className="discount__title">discount</p>
        <Swiper slidesPerView={3} className="discount__list">
          {discountItems.map(() => (
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                  <img src="/apple.svg" alt="apple" />
                  <div className="card__discount">
                    <span>-15%</span>
                  </div>
                </div>
                <div className="card__content">
                  <p className="card__price-new">9.000 swm</p>
                  <p className="card__price-old">12.000 swm</p>
                  <p className="card__title">Apple</p>
                  <p className="card__category">Fruit</p>
                </div>
                <button>
                  <img src="/plus_icon.svg" alt="" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="container">
        <section className="fruit">
          <p className="section__title">Fruit</p>
          <ul className="fruit__list">
            {fruitItems.map(() => (
              <li className="fruit__item">
                <div className="fruit__image-wrapper">
                  <img className="fruit__image" src="/apple.svg" alt="apple" />
                  <span className="fruit__favorite">
                    <img src="/heart.svg" alt="heart" />
                  </span>
                </div>

                <div className="fruit__info">
                  <p className="fruit__price">12.000 swm</p>
                  <p className="fruit__title">Apple</p>
                  <p className="fruit__category">Fruit</p>
                  <button className="fruit__btn">+Add</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default App;
