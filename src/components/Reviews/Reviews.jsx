import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
import RatingStars from "../Stars/RatingStars";

const Reviews = () => {
  const { truckId } = useParams();

  const truck = useSelector((state) =>
    state.truckList.items.find((item) => item.id.toString() === truckId)
  ); //truckid is always a string
  if (!truck) {
    return <p>Загрузка... или грузовик не найден.</p>;
  }
  return (
    <div className={css.reviewContainer}>
      <ul>
        {truck.reviews.map((review) => (
          <li key={truck.id}>
            <p>{review.reviewer_name}</p>
            <RatingStars rating={truck.rating} />
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
