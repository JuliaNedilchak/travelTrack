import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { truckId } = useParams();
  const truck = useSelector((state) =>
    state.truckList.items.find((item) => item.id.toString() === truckId)
  ); //truckid is always a string
  if (!truck) {
    return <p>Загрузка... или грузовик не найден.</p>;
  }
  return (
    <div>
      <h1>{truck.id}</h1>
    </div>
  );
};

export default DetailsPage;
