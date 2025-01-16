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

  return (
    <div>
      {Array.isArray(truckItems) && truckItems.length === 0 ? (
        <p>no trucks</p>
      ) : (
        <ul className={css.itemsList}>
          {Array.isArray(truckItems) &&
            truckItems.map((truck) => (
              <li className={css.truckItem} key={truck.id}>
                <CatalogItem
                  name={truck.name}
                  price={truck.price}
                  rating={truck.rating}
                  location={truck.location}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CatalogPart;
