import { Route, Routes } from "react-router-dom";
//import Hero from "./components/Hero/Hero";
//import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Catalog from "../src/components/Catalog/Catalog";

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
