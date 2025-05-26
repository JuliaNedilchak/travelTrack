import { useState } from "react";
import Container from "../../components/Container/Container";
import TruckDetails from "../../components/TruckDetails/TruckDetails";
import Features from "../../components/Features/Features";

const DetailsPage = () => {
  const [features, setFeatures] = useState(false);
  const handleClick = () => {
    setFeatures(true);
  }

  return (
    <Container>
      <TruckDetails />
      <div>
        <button type="button" onClick={handleClick}>Features</button>
        {features && <Features/>}
      </div>
    </Container>
  );
};

export default DetailsPage;
