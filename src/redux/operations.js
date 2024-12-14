import { apiTruckList } from "../api";
import { truckSuccess } from "./actions";

export const fetchTrucks = () => async (dispatch) => {
  try {
    const trucks = await apiTruckList();
    dispatch(truckSuccess(trucks.items));
  } catch (error) {
    console.log(error);
  }
};
