const INITIAL_STATE = {
  items: [],
};

export const truckReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "truckList/showAll":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
