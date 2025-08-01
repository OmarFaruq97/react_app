import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </>
  );
}

export default App;
