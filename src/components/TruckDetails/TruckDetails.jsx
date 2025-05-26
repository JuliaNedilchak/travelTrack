import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import css from "./TruckDetails.module.css";

const TruckDetails = () => {
  const { truckId } = useParams();
  const truck = useSelector((state) =>
    state.truckList.items.find((item) => item.id.toString() === truckId)
  ); //truckid is always a string
  if (!truck) {
    return <p>Загрузка... или грузовик не найден.</p>;
  }
  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(truck.price);

  return (
    <div>
      <h1>{truck.name}</h1>
      <div>
        <p>
          {truck.rating} ({truck.reviews.length} reviews)
        </p>
        <p>{truck.location} </p>
        <p>{formattedPrice} </p>
        <ul className={css.photoList}>
          {truck.gallery.map((truckItem) => (
            <li className={css.photo} key={truckItem.id}>
              {" "}
              <img className={css.picture} src={truckItem.thumb} alt="truck" />
            </li>
          ))}
        </ul>
        <p>{truck.description}</p>
      </div>
    </div>
  );
};

export default TruckDetails;
