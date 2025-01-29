import css from "./CatalogItem.module.css";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdLocalGasStation } from "react-icons/md";
import { BsCupHot } from "react-icons/bs";

const CatalogItem = ({
  name,
  price,
  transmission,
  location,
  reviewsAmount,
  photo,
  reviews,
  description,
  engine,
  AC,
  kitchen,
  form,
  TV,
  bathroom,
}) => {
  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return (
    <div className={css.descFrame}>
      <div className={css.photoFrame}>
        <img className={css.photo} src={photo} alt="truck" />
      </div>
      <div className={css.descTruck}>
        <div className={css.truckName}>
          <h1 className={css.name}>{name}</h1>
          <p className={css.price}>{formattedPrice}</p>
        </div>

        <div className={css.partOfDesc}>
          <p className={css.reviews}>
            {reviews} ({reviewsAmount} reviews)
          </p>
          <p className={css.location}>{location}</p>
        </div>
        <p>{description}</p>
        <ul className={css.detailsList}>
          <li className={css.detailItem}>
            <TbAutomaticGearbox />
            {transmission}
          </li>
          <li className={css.detailItem}>{form}</li>
          <li className={css.detailItem}>
            {" "}
            <MdLocalGasStation />
            {engine}
          </li>
          <li className={css.detailItem}>{AC}</li>
          {kitchen && (
            <li className={css.detailItem}>
              <BsCupHot />
              kitchen
            </li>
          )}

          {TV && <li className={css.detailItem}>TV</li>}
          {bathroom && <li className={css.detailItem}>bathroom</li>}
        </ul>
      </div>
    </div>
  );
};

export default CatalogItem;
