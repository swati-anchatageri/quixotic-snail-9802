import styled from "@emotion/styled";
import React, { useState } from "react";
import { Menus } from "../utils/menus";
import {FaSignOutAlt} from "react-icons/fa"
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ active, setActive, onclick }) => {
    const navigate = useNavigate();
    
    //Handle Logout
    const handleLogout = ()=>{
        localStorage.clear()
        navigate("/")
    }
console.log(Menus)
  return (
    <NavStyled>
      <ul className="menu-items">
        {Menus.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              // onClick={handleClick(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <Button
          colorScheme="blue"
          variant="outline"
          leftIcon=<i className="fa-solid fa-chart-line"><FaSignOutAlt/></i>
          transition={"border-radius 0.3s ease-in-out"}
          _hover={{
            borderRadius: "20px",
          }}
          onClick={handleLogout}
        >
          SignOut
        </Button>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 100%;
  height: 100%;
  /* margin-left: 10px; */
  /* background: rgba(252, 246, 249, 0.78); */
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: black;
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`;
export default Sidebar;
