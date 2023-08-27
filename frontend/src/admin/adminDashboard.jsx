import styled from "@emotion/styled";
import Sidebar from "./Sidebar";
import {GiHamburgerMenu} from "react-icons/gi"
import { Button, Container, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import {
    Drawer,
    DrawerBody,  
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import AdminProperties from "./AdminProperties";
import AddProperties from "./addProperties";
import UserList from "./adminUsers";
import AdminList from "./Adminlist";

const AdminDashBoard = () => {
  const [active, setActive] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const displayData = () => {
    
    switch (active) {
      case 1:
        return <AdminProperties />;
        
      case 2:
        return <AddProperties />;
        
      case 3:
        return <UserList />;
       
      case 4:
        return <AdminList />;
      default:
        return <AdminProperties />;
    }
  };



  return (
    <Container maxW={"12xl"}>
      <DIV>
      <div className="drawer-menu" >
      <Button ref={btnRef} bg='black' color={"white"} onClick={onOpen}>
      <i className="fa-solid fa-chart-line"><GiHamburgerMenu/></i></Button>
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menus</DrawerHeader>
      
                <DrawerBody>
                <Sidebar onclick={onClose} active={active} setActive={setActive} />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
      </div>
        <div id="side-bar">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div id="details">{displayData()}</div>
      </DIV>
      </Container>
  );
};


export default AdminDashBoard;

const DIV = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
 padding:10px;
  margin-bottom: 20px;
  .drawer-menu{
    display: none;
  }

   #side-bar {
    width: 25%;
    text-align: left; 
    background-color: white;
    border-radius: none;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    box-shadow: 5px 10px 18px #888888;
  }
  #details {
    width: 75%;
     border-radius: none;
     background-color: white;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    box-shadow: 5px 10px 18px #888888;
  } 
  @media screen and (max-width: 992px) {
    display:flex;
    flex-direction: column;
    text-align: center;
  #side-bar {
  display: none;
  }
  #details{
    width: 95%;
    margin: 0px;
    margin: auto;
  }
.drawer-menu{
    display: block;
    text-align: left;
    padding-left: 10px;
}}
  
`
