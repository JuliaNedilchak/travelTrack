import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { CiMap } from "react-icons/ci";
import { useEffect, useState } from "react";
import {
  apiRequestTruckList,
  setEquipmentTypeFilter,
  setLocationFilter,
  setTypeFilter,
} from "../../redux/trucklist/truckSlice";
import { AiOutlineAppstore } from "react-icons/ai";
//import { AiOutlineAppstore } from "react-icons/ai";

const Filter = () => {
  //const [filtersState, setFiltersState] = useState(currentFilters);
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  //const filters = useSelector((state) => state.truckList.filters.equipment);
  const [equipment, setEquipment] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Bathroom: false,
  });
  const [type, setType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setLocationFilter(location));
    dispatch(setEquipmentTypeFilter(equipment));
    dispatch(setTypeFilter(type));
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    setEquipment((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  useEffect(() => {
    dispatch(apiRequestTruckList());
  }, [dispatch]);

  return (
    <div className={css.filterBox}>
      <form onSubmit={onSubmit}>
        <label>
          <CiMap />
          location
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocationChange}
          ></input>
        </label>
        <h2>Vehicle equipment</h2>

        <label>
          AC
          <input
            type="checkbox"
            name="AC"
            checked={equipment.AC}
            onChange={handleEquipmentChange}
          ></input>
        </label>
        <label>
          Automatic
          <input
            type="checkbox"
            name="Automatic"
            checked={equipment.Automatic}
            onChange={handleEquipmentChange}
          ></input>
        </label>
        <label>
          Kitchen
          <input
            type="checkbox"
            name="Kitchen"
            checked={equipment.Kitchen}
            onChange={handleEquipmentChange}
          ></input>
        </label>
        <label>
          TV
          <input
            type="checkbox"
            name="TV"
            checked={equipment.TV}
            onChange={handleEquipmentChange}
          ></input>
        </label>
        <label>
          Bathroom
          <input
            type="checkbox"
            name="Bathroom"
            checked={equipment.Bathroom}
            onChange={handleEquipmentChange}
          ></input>
        </label>
        <h1>Filters</h1>
        <h2>Vehicle type</h2>
        <label>
          Van
          <input
            type="radio"
            name="vehicleType"
            value="panelTruck"
            checked={type === "panelTruck"}
            onChange={handleTypeChange}
          ></input>
        </label>
        <label>
          <AiOutlineAppstore />
          Fully integrated
          <input
            type="radio"
            name="vehicleType"
            value="fullyIntegrated"
            checked={type === "fullyIntegrated"}
            onChange={handleTypeChange}
          ></input>
        </label>
        <label>
          Alcove
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            checked={type === "alcove"}
            onChange={handleTypeChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Filter;

//
//  <h2>Vehicle equipment</h2>
/* <label>
          AC
          <input type="radio" name="vehicleType" value="AC"></input>
        </label>
        <label>
          Automatic
          <input type="radio" name="vehicleType" value="Automatic"></input>
        </label>
        <label>
          Kitchen
          <input type="radio" name="vehicleEquip" value="Kitchen"></input>
        </label>
        <label>
          TV
          <input type="radio" name="vehicleEquip" value="TV"></input>
        </label>
        <label>
          Bathroom
          <input type="radio" name="vehicleEquip" value="Bathroom"></input>
        </label>
        <h2>Vehicle type</h2>
        <label>
          Van
          <input type="checkbox" name="vehicleType" value="Van"></input>
        </label>
        <label>
          <AiOutlineAppstore />
          Fully integrated
          <input
            type="checkbox"
            name="vehicleType"
            value="Fully integrated"
          ></input>
        </label>
        <label>
          Alcove
          <input type="checkbox" name="vehicleType" value="Alcove"></input>
        </label>  */
