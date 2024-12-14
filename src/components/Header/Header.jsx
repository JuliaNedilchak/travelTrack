import React from "react";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <div>
            <a href="/">TravelTrucks</a>
          </div>
          <Navigation />
        </div>
      </header>
    </div>
  );
};

export default Header;
