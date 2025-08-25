import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import Drinks from "./pages/Drinks";
import ProductDetail from "./pages/ProductDetail";
import SearchByCategory from "./pages/SearchByCategory";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drink/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchByCategory />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
console.log(ProductDetail);
export default App;
