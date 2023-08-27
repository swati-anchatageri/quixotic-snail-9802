import {AiFillHome} from "react-icons/ai";
import {BsFillHouseAddFill} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi"
import {RiAdminFill} from "react-icons/ri"
export const home = <AiFillHome/>
export const addhome = <BsFillHouseAddFill/>
export const user = <BiSolidUser/>
export const admin = <RiAdminFill/>
export const Menus = [
  { id: 1, name: "Properties", icon: home, link: "/adminproperties" },
  { id: 2, name: "Add Properties", icon: addhome, link: "/addproperties" },
  { id: 3, name: "Users", icon: user, link: "/userlist" },
  { id: 4, name: "Admins", icon: admin, link: "/adminlist" },
];
