import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";

const UserList = () => {
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [user,setUser]=useState([]) 
  useEffect(() => {
    
  }, []);

  const toggleButton = (userId) => {
    const index = blockedUsers.indexOf(userId);
    if (index === -1) {
      // User is not blocked, add to blockedUsers array
      setBlockedUsers([...blockedUsers, userId]);
    } else {
      // User is blocked, remove from blockedUsers array
      const updatedBlockedUsers = blockedUsers.filter((id) => id !== userId);
      setBlockedUsers(updatedBlockedUsers);
    }
  };

  const isUserBlocked = (userId) => {
    return blockedUsers.includes(userId);
  };

  return (
    <>
      <Box bgColor={"#CAEDFF"}>
        <Heading textAlign={"center"} p={5} color=" #1e7816 ">
          List Of Users
        </Heading>
        <TableContainer
          p={2}
          maxW={"90%"}
          margin={"auto"}
          fontSize={{ base: "12", md: "sm", xl: "md" }}
        >
          <Table variant="striped" bgColor={"white"}>
            <TableCaption color=" #1e7816">LIST OF USERS</TableCaption>
            <Thead>
              <Tr fontSize={{ base: "12", md: "sm", xl: "md" }}>
                <Th color=" #1e7816">NAME</Th>
                <Th color=" #1e7816">EMAIL</Th>
                <Th color=" #1e7816">PHONE</Th>
                <Th color=" #1e7816">GENDER</Th>
                <Th color=" #1e7816">BLOCK</Th>
              </Tr>
            </Thead>
            <Tbody>
              {user.map((item) => {
                const isBlocked = isUserBlocked(item._id);
                return (
                  <Tr key={item._id}>
                    <Td>{item.name}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.phone}</Td>
                    <Td>{item.gender}</Td>
                    <Td>
                      <Button
                        color=" #1e7816"
                        fontSize={{ base: "10", md: "sm" }}
                        onClick={() => toggleButton(item._id)}
                        disabled={isBlocked}
                      >
                        {isBlocked ? "Blocked" : "Unblocked"}
                      </Button>{" "}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UserList;