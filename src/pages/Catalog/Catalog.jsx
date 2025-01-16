import React from "react";
//import Container from "../../components/Container/Container";
import CatalogPart from "../../components/Catalog/CatalogPart";
import Filter from "../../components/Filter/Filter";
import Container from "../../components/Container/Container";
import css from "./Catalog.module.css";

const Catalog = () => {
  return (
    <Container>
      <div className={css.page}>
        <Filter />
        <CatalogPart />
      </div>
    </Container>
  );
};

export default Catalog;
