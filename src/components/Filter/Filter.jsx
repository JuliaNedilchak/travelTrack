import React, { useState } from "react";
import css from "./Filter.module.css";
import { CiMap } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector((state) => state.filters);
  const [filtersState, setFiltersState] = useState(currentFilters);
  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    const updatedFilters = {
      ...filtersState,
      [name]: type === "checkbox" ? checked : value,
    };
    setFiltersState(updatedFilters);
  };

  return (
    <div className={css.filterBox}>
      <form>
        <label>
          <CiMap />
          location
          <input
            type="text"
            name="location"
            value={filtersState.location || " "}
            onChange={handleChange}
          ></input>
        </label>
        <h1>Filters</h1>
        <h2>Vehicle equipment</h2>
        <label>
          AC
          <input
            type="radio"
            name="vehicleType"
            value="AC"
            checked={filtersState.vehicleEquip === "AC"}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Automatic
          <input
            type="radio"
            name="vehicleType"
            value="Automatic"
            checked={filtersState.vehicleEquip === "Automatic"}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Kitchen
          <input
            type="radio"
            name="vehicleEquip"
            value="Kitchen"
            checked={filtersState.vehicleEquip === "Kitchen"}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          TV
          <input
            type="radio"
            name="vehicleEquip"
            value="TV"
            checked={filtersState.vehicleEquip === "TV"}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Bathroom
          <input
            type="radio"
            name="vehicleEquip"
            value="Bathroom"
            checked={filtersState.vehicleEquip === "Bathroom"}
            onChange={handleChange}
          ></input>
        </label>
        <h2>Vehicle type</h2>
        <label>
          Van
          <input
            type="checkbox"
            name="vehicleType"
            value="Van"
            checked={filtersState.vehicleType.includes("Van")}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <AiOutlineAppstore />
          Fully integrated
          <input
            type="checkbox"
            name="vehicleType"
            value="Fully integrated"
            checked={filtersState.vehicleType.includes("Fully integrated")}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Alcove
          <input
            type="checkbox"
            name="vehicleType"
            value="Alcove"
            checked={filtersState.vehicleType.includes("Alcove")}
            onChange={handleChange}
          ></input>
        </label>
      </form>
    </div>
  );
};

export default Filter;
