const INITIAL_STATE = {
  location: "",
  AC: false,
  automatic: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  vehicleTypes: [],
};

export const truckFilterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "trucks/filters":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
