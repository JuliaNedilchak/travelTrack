import { useState } from "react";
import Container from "../../components/Container/Container";
import TruckDetails from "../../components/TruckDetails/TruckDetails";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import css from "./DetailsPage.module.css";

import FormRequest from "../../components/Form/FormRequest";

const DetailsPage = () => {
  const [activeTab, setActiveTab] = useState(null);
  return (
    <Container>
      <TruckDetails />
      <div className={css.caseForEverything}>
        <div className={css.caseForDetails}>
          <button type="button" onClick={() => setActiveTab("features")}>
            Features
          </button>
          <button type="button" onClick={() => setActiveTab("reviews")}>
            Reviews
          </button>
          {activeTab === "features" && <Features />}
          {activeTab === "reviews" && <Reviews />}
        </div>
        <div className={css.caseForForm}>
          <p>Book your campervan now</p>
          <p>Stay connected! We are always ready to help you.</p>
          <FormRequest />
        </div>
      </div>
    </Container>
  );
};

export default DetailsPage;
