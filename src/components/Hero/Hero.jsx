import React from "react";
import css from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className={css.container}>
        <div>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <Link to="/catalog">
          <button type="button">View Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
