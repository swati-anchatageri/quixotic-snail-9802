import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "../Pages/Login";
import Register from "../Pages/Rregister";
import NotFound from "./pageNotFound";

import HomePage from "../Pages/HomePage";

import { Buyproduct } from "../Pages/BuyProduct/Buyproduct";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

import { AdminSignin } from "../admin/adminSignin";
import AdminDashboard from "../admin/adminDashboard";
import AdminProperies from "../admin/AdminProperties";
import UserList from "../admin/adminUsers";
import AdminList from "../admin/Adminlist";
import AddProperties from "../admin/addProperties";
import EditProperty from "../admin/editProperty";
import Calculator from "../Pages/Calculator";


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

        <Route path="*" element={<NotFound />} />
        <Route path="/adminsignin" element={<AdminSignin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/adminproperties" element={<AdminProperies/>}/>
        <Route path="/userlist" element={<UserList/>}/>
        <Route path="/adminlist" element={<AdminList/>}/>
        <Route path="/addproperty" element={<AddProperties/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/editproperty/:id" element={<EditProperty/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
