import axios from "axios";

export const apiTruckList = async () => {
  const options = {
    method: "GET",
    url: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
    headers: {
      accept: "application/json",
    },
  };
  const { data } = await axios.request(options);
  console.log(data);
  return data;
};
