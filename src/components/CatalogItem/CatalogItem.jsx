import css from "./CatalogItem.module.css";

const CatalogItem = ({
  name,
  price,
  rating,
  location,
  reviewsAmount,
  photo,
  reviews,
  description,
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

        <p>{rating}</p>
      </div>
    </div>
  );
};

export default CatalogItem;
