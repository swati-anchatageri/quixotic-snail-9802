import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "../Pages/Login";
import Register from "../Pages/Rregister";
import NotFound from "./pageNotFound";

import HomePage from "../Pages/HomePage";
import { Buyproduct } from "../Pages/BuyProduct/Buyproduct";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/buyproduct" element={<Buyproduct />} />
        <Route path="/buyproduct/:id" element={<SingleProduct/>} />

        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
