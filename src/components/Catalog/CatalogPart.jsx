import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/operations";
import css from "./CatalogPart.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogPart = () => {
  const dispatch = useDispatch();
  const truckItems = useSelector((state) => state.trucklist.items);
  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  const truncatedText = (text, maxLength) => {
    if (text.length > maxLength) {
      return <span>{text.slice(0, maxLength - 3) + "..."}</span>;
    }
  };
  return (
    <div>
      {Array.isArray(truckItems) && truckItems.length === 0 ? (
        <p>no trucks</p>
      ) : (
        <ul className={css.itemsList1}>
          {Array.isArray(truckItems) &&
            truckItems.map((truck) => (
              <li className={css.itemsList} key={truck.id}>
                <CatalogItem
                  name={truck.name}
                  price={truck.price}
                  rating={truck.rating}
                  description={truncatedText(truck.description, 70)}
                  location={truck.location}
                  photo={truck.gallery[0].thumb}
                  reviews={
                    truck.reviews.reduce(
                      (sum, review) => sum + review.reviewer_rating,
                      0
                    ) / truck.reviews.length
                  }
                  reviewsAmount={truck.reviews.length}
                  transmission={truck.transmission}
                  engine={truck.engine}
                  AC={truck.AC ? <p>ac</p> : null}
                  kitchen={truck.kitchen ? <p>kitchen</p> : null}
                  form={truck.form}
                  TV={truck.TV ? <p>TV</p> : null}
                  bathroom={truck.bathroom ? <p>bathroom</p> : null}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CatalogPart;
