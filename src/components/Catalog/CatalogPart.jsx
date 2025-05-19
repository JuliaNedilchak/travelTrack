import { useDispatch, useSelector } from "react-redux";

import css from "./CatalogPart.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useEffect } from "react";
import { apiRequestTruckList } from "../../redux/trucklist/truckSlice";

const CatalogPart = () => {
  const dispatch = useDispatch();
  const truckItems = useSelector((state) => state.truckList.items);
  /*console.log(
    "TRUCK FORMS:",
    truckItems.map((truck) => truck.form)
  );*/

  const filteredLocation = useSelector(
    (state) => state.truckList.filters.location
  );
  const filters = useSelector((state) => state.truckList.filters);
  console.log("Current filters:", filters);
  useEffect(() => {
    dispatch(apiRequestTruckList());
  }, [dispatch]);
  const truncatedText = (text, maxLength) => {
    if (text.length > maxLength) {
      return <span>{text.slice(0, maxLength - 3) + "..."}</span>;
    }
  };
  const filteredItems = truckItems.filter((truck) => {
    const matchesLocation = truck.location
      .toLowerCase()
      .includes(filteredLocation.toLowerCase());

    const matchesBodyType = !filters.form || truck.form === filters.form;
    const matchesEquipment =
      (!filters.equipment.AC || truck.AC) &&
      (!filters.equipment.Automatic || truck.transmission === "automatic") &&
      (!filters.equipment.Kitchen || truck.kitchen) &&
      (!filters.equipment.TV || truck.TV) &&
      (!filters.equipment.Bathroom || truck.bathroom);

    return matchesLocation && matchesBodyType && matchesEquipment;
  });
  return (
    <div>
      {Array.isArray(filteredItems) && filteredItems.length === 0 ? (
        <p>no trucks</p>
      ) : (
        <ul className={css.itemsList1}>
          {Array.isArray(filteredItems) &&
            filteredItems.map((truck) => (
              <li className={css.itemsList} key={truck.id}>
                <CatalogItem
                  id={truck.id}
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
                  AC={truck.AC ? "AC" : null}
                  kitchen={truck.kitchen ? "kitchen" : null}
                  form={truck.form}
                  TV={truck.TV ? "TV" : null}
                  bathroom={truck.bathroom ? "bathroom" : null}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default CatalogPart;
