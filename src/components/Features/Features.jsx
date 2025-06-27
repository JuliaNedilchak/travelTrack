import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import css from "./Features.module.css";

const Features = () => {
  const { truckId } = useParams();

  const truck = useSelector((state) =>
    state.truckList.items.find((item) => item.id.toString() === truckId)
  ); //truckid is always a string
  if (!truck) {
    return <p>Загрузка... или грузовик не найден.</p>;
  }
  return (
    <div className={css.detailsContainer}>
      <ul className={css.detailsList}>
        <li className={css.detailItem}>{truck.transmission}</li>
        {truck.AC && <li className={css.detailItem}>AC</li>}
        {truck.bathroom && <li className={css.detailItem}>bathroom</li>}
        <li className={css.detailItem}>{truck.engine}</li>
        {truck.kitchen && <li className={css.detailItem}>kitchen</li>}
        {truck.TV && <li className={css.detailItem}>TV</li>}
        {truck.radio && <li className={css.detailItem}>radio</li>}
        {truck.refrigerator && <li className={css.detailItem}>refrigerator</li>}
        {truck.microwave && <li className={css.detailItem}>microwave</li>}
        {truck.gas && <li className={css.detailItem}>gas</li>}
      </ul>
      <div>
        <p>Vehicle details</p>
        <ul className={css.vehicleDetails}>
          <li className={css.itemDetail}>
            <p className={css.itemName}>Form</p>
            <p className={css.itemValue}>{truck.form}</p>
          </li>
          <li className={css.itemDetail}>
            <p className={css.itemName}>Length</p>
            <p className={css.itemValue}> {truck.length}</p>
          </li>
          <li className={css.itemDetail}>
            <p className={css.itemName}>Width</p>
            <p className={css.itemValue}> {truck.width}</p>
          </li>
          <li className={css.itemDetail}>
            <p className={css.itemName}>Height</p>
            <p className={css.itemValue}> {truck.height}</p>
          </li>
          <li className={css.itemDetail}>
            <p className={css.itemName}>Tank</p>
            <p className={css.itemValue}> {truck.tank}</p>
          </li>
          <li className={css.itemDetail}>
            <p className={css.itemName}>Consumption</p>
            <p className={css.itemValue}>{truck.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
