import React from "react";
import css from "./Container.module.css";
import Header from "../Header/Header";

function Container({ children }) {
  return (
    <div className={css.container}>
      <Header />
      {children}
    </div>
  );
}

export default Container;
