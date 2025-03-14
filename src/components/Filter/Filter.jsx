import css from "./Filter.module.css";
import { CiMap } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";

const Filter = () => {
  //const [filtersState, setFiltersState] = useState(currentFilters);

  return (
    <div className={css.filterBox}>
      <form>
        <label>
          <CiMap />
          location
          <input type="text" name="location"></input>
        </label>
        <h1>Filters</h1>
        <h2>Vehicle equipment</h2>
        <label>
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
        </label>
      </form>
    </div>
  );
};

export default Filter;
