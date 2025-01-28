import css from "./CatalogItem.module.css";

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
        <div className={css.detailsList}>
          <p className={css.detailItem}>{transmission}</p>
          <p className={css.detailItem}>{form}</p>
          <p className={css.detailItem}>{engine}</p>
          <p className={css.detailItem}>{AC}</p>
          <p className={css.detailItem}>{kitchen}</p>
          <p className={css.detailItem}>{TV}</p>
          <p className={css.detailItem}>{bathroom}</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
