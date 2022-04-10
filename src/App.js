import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Success from "./components/Success";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardInfo from "./components/CardInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login></Login>} />
        <Route path="products" element={<Products></Products>} />
        <Route path="success" element={<Success></Success>} />
        <Route path="cardinfo" element={<CardInfo></CardInfo>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
