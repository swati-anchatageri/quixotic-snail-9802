import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const PropertyCard = ({
  image,
  details,
  status,
  total_price,
  bathroom,
  carpet,
  _id,
  furnishing,
}) => {
  const toast = useToast();
  const positions = ["top"];
  const handleClick = () => {
    toast({
      title: `Product Deleted Successfully`,
      position: positions,
      isClosable: true,
    });
  };
  return (
    <div>
      <Card maxW="sm" maxH={"800px"} mt={5} border={"1px solid #1e7816 "}>
        <CardBody>
          <Text color={"black"} mb={10} maxBlockSize={5} fontSize="lg">
            {details}
          </Text>
          <Image
            src={image}
            alt={details}
            borderRadius="lg"
            objectFit={"cover"}
            aspectRatio={3 / 2}
            width={"100%"}
          />
          <Stack mt="3" spacing="3">
            <Text color={"black"} fontSize="md">
              Price:-{total_price}
            </Text>
            <Text color={"black"} fontSize="md">
              Carpet Area :-{carpet}
            </Text>
            <Text color={"black"} fontSize="md">
              Bathroom:-{bathroom}
            </Text>
            <Text color={"black"} fontSize="sm">
            Furnishing:-{furnishing}
            </Text>
            <Text color={"black"} fontSize="sm">
              Status:-{status}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent={"space-between"} justifyItems={"center"}>
          <Button mr="20px" color={"#1e7816"}>
            {" "}
            <Link to={`/editproperty/${_id}`}>Edit</Link>
          </Button>
          <Button color={"#1e7816"} onClick={handleClick}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PropertyCard;
