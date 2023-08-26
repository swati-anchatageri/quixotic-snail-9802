// import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import {
  Box,
  Stack,
  Heading,
  Container,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { SearchIcon } from "@chakra-ui/icons";

export default function Carousel() {
  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}>
      <Slider>
        <Box
          height={"6xl"}
          position="relative"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage={`url(https://delivery.digitalassets.zillowgroup.com/api/public/content/Zillow_72Sunny_208_1024wtabletlandscape_CMS_Full.jpg)`}>
          {/* This is the block you need to change, to customize the caption */}
          <Container size="container.lg" height="30rem" position="relative">
            <Stack
              spacing={6}
              w={{ base: "sm", md: "lg", lg: "xl" }}
              position="absolute"
              top="50%"
              transform="translate(0, -50%)">
              <Heading
                fontStyle={"revert-layer"}
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                color={"white"}>
                {"Agents. Tours. Loans. Homes."}
              </Heading>
              <InputGroup mx="auto" mt="20px" bg={"white"}>
                <Input
                  placeholder="Search..."
                  p={8}
                  size={{ base: "sm", md: "md", lg: "lg" }}
                />
                <InputRightElement pointerEvents="none">
                  <SearchIcon color="gray.700" />
                </InputRightElement>
              </InputGroup>
            </Stack>
          </Container>
        </Box>
      </Slider>
    </Box>
  );
}
