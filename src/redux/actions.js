export const truckSuccess = (trucks) => {
  return {
    type: "truckList/showAll",
    payload: trucks,
  };
};
