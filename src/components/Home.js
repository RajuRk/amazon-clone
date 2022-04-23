import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12345"
          title="That Night: Four Friends. Twenty Years. One Haunting Secret."
          price={227}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41kRkqIt6aL._SX322_BO1,204,203,200_.jpg"
        />
        <Product
          id="12346"
          title="Samsung Galaxy A52s 5G (Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={32499}
          rating={4}
          image="https://m.media-amazon.com/images/I/91zjIiEiPQL._SX569_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12347"
          title="DEAL OF THE DAY HP 245 G8 AMD Ryzen 5 - 3500U 14 inch Laptop (8GB RAM/1TB HDD/Windows 10 /Radeon Vega 8 Graphics/NO ODD)."
          price={37900}
          rating={4}
          image="https://m.media-amazon.com/images/I/71HVv3+S1vS._AC_SX480_SY360_.jpg"
        />
        <Product
          id="12348"
          title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
          price={33500}
          rating={5}
          image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SX569_.jpg"
        />
        <Product
          id="12349"
          title="Sonata Essentials Analog Black Dial Men's Watch-NN77082SM01/NP77082SM01"
          price={849}
          rating={4}
          image="https://m.media-amazon.com/images/I/71uuCjqY9iL._UY741_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12350"
          title="Mi 100 cm (40 inches) Horizon Edition Full HD Android LED TV 4A | L40M6-EI (Black) (2021 Model)"
          price={22999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71k7M05go-L._SX569_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
