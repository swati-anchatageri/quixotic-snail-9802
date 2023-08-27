import React from "react"
import { Box, Container } from "@chakra-ui/react";
import PropertyList from "./propertyList";
const AdminProperties = () => {
  return (
    <>
      <Box bgColor={"#CAEDFF"}>
        <Container
          maxW={{
            base: "100%",
            sm: "90%",
            lg: "100%",
          }}
        >
          <Box mb={5}>
            <PropertyList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AdminProperties;
