import React from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className={css.header}>
          <div className={css.symbol}>
            <a href="/">TravelTrucks</a>
          </div>
          <div className={css.headerNav}>
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
