import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrucks } from "../../redux/operations";
//import css from "./Catalog.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";

const Catalog = () => {
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
        <ul>
          {Array.isArray(truckItems) &&
            truckItems.map((truck) => (
              <li key={truck.id}>
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

export default Catalog;
