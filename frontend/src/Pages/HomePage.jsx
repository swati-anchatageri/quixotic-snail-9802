import React from "react";
import Carousel from "../Componants/Carousel";
import { Box } from "@chakra-ui/react";
import HomeCard from "../Componants/HomeCards";

const HomePage = () => {
  return (
    <div>
      <Box>
        <Carousel />
      </Box>
      <Box>
        <HomeCard />
      </Box>
    </div>
  );
};

export default HomePage;
