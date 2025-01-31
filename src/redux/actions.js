export const truckSuccess = (trucks) => {
  return {
    type: "truckList/showAll",
    payload: trucks,
  };
};

export const filterTrucks = (filters) => {
  return {
    type: "trucks/filters",
    payload: filters,
  };
};
