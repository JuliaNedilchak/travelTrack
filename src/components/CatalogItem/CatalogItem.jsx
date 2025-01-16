const CatalogItem = ({ name, price, rating, location }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{rating}</p>
      <p>{location}</p>
    </div>
  );
};

export default CatalogItem;
