import {
  Box,
  Button,
  Center,
  chakra,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
  const { image, heading, buttonText, desc } = props;
  return (
    <Center py={6}>
      <Box
        boxShadow={"lg"}
        maxW={"445px"}
        w={"full"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        transition={"transform 0.3s"} // Added transition
        _hover={{ transform: "scale(1.10)", boxShadow: "xl" }} // Added hover effect
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}>
          <Image src={image} alt="Example" />
        </Box>
        <Stack p={8}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}>
            {heading}
          </Heading>
          <Text color={"gray.500"}>{desc}</Text>
        </Stack>
        <Box p={8}>
          <Button size="lg" colorScheme="blue">
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}>
        What is our company doing?
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          image={
            "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp"
          }
          buttonText={"Browse homes"}
          heading={"Buy a home"}
          desc={`Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else. `}
        />
        <StatsCard
          image={
            "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Sell_a_home.webp"
          }
          buttonText={"See your option"}
          heading={"Sell a home"}
          desc={`No matter what path you take to sell your home, we can help you navigate a successful sale`}
        />
        <StatsCard
          image={
            "https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp"
          }
          buttonText={"Find rentals"}
          heading={"Rent a home"}
          desc={`We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent. `}
        />
      </SimpleGrid>
    </Box>
  );
}
