import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import Drinks from "./pages/Drinks";
import productDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/:id" element={<productDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
