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
            <p>Form</p>
            {truck.form}
          </li>
          <li className={css.itemDetail}>
            <p>Length</p>
            {truck.length}
          </li>
          <li>
            <p>Width</p>
            {truck.width}
          </li>
          <li>
            <p>Height</p>
            {truck.height}
          </li>
          <li>
            <p>Tank</p>
            {truck.tank}
          </li>
          <li>
            <p>Consumption</p>
            {truck.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
