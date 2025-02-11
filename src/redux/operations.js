import { apiFilterTrucks, apiTruckList } from "../api";
import { filterTrucks, truckSuccess } from "./actions";

export const fetchTrucks = () => async (dispatch) => {
  try {
    const trucks = await apiTruckList();
    dispatch(truckSuccess(trucks.items));
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilteredTrucks = () => async (dispatch) => {
  try {
    const filteredTrucks = await apiFilterTrucks();
    dispatch(filterTrucks(filteredTrucks));
  } catch (error) {
    console.log(error);
  }
};
