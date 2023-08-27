import React from "react"
import { Box, Container,Heading } from "@chakra-ui/react";
import PropertyList from "./propertyList";
const AdminProperties = () => {
  return (
    <>
      <Box bgColor={"#CAEDFF"}>
        <Container p={5}
          maxW={{
            base: "100%",
            sm: "90%",
            lg: "100%",
          }}
        >
          <Box mb={5}>
          <Heading as="h2" size="xl" color={"blackAlpha.900"}>Properties..</Heading>
            <PropertyList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AdminProperties;
