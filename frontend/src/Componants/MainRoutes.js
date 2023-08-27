import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "../Pages/Login";
import Register from "../Pages/Rregister";
import NotFound from "./pageNotFound";

import HomePage from "../Pages/HomePage";
import { AdminSignin } from "../admin/adminSignin";
import AdminDashboard from "../admin/adminDashboard";
import AdminProperies from "../admin/AdminProperties";
import UserList from "../admin/adminUsers";
import AdminList from "../admin/Adminlist";
import AddProperties from "../admin/addProperties";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/adminsignin" element={<AdminSignin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/adminproperties" element={<AdminProperies/>}/>
        <Route path="/userlist" element={<UserList/>}/>
        <Route path="/adminlist" element={<AdminList/>}/>
        <Route path="/addproperty" element={<AddProperties/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
