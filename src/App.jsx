import { Route, Routes } from "react-router-dom";
//import Hero from "./components/Hero/Hero";
//import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
//import CatalogPart from "./components/Catalog/CatalogPart";
import Catalog from "./pages/Catalog/Catalog";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
};

export default App;
