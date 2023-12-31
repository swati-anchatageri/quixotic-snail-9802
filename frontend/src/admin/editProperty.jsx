import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  useToast,
  Textarea,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProperty = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const toast = useToast();
  const positions = ["top"];
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch the property data using Axios
    axios
      .get(`https://homesweeter.onrender.com/property/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(id, item);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Patch the property data using Axios
    axios
      .patch(`https://homesweeter.onrender.com/property/update/${id}`, item)
      .then(() => {
        toast({
          title: "Property Edit Successful",
          position: positions,
          isClosable: true,
          status: "success",
        });
        navigate("/admindashboard");
      })
      .catch((error) => {
        console.error("Error editing property:", error);
        toast({
          title: "An error occurred",
          description: "Failed to edit the property.",
          position: positions,
          isClosable: true,
          status: "error",
        });
      });
  };
  return (
    <>
      <Box bgColor={"#CAEDFF"}>
        <Container
          maxW="8xl"
          border="1px"
          borderColor="#1450A3"
          bgColor={"white"}
          p={"20px"}
          mt={"30px"}
          mb={5}
        >
          <FormControl>
            <Heading mb={"10px"} color={"#1450A3"} textAlign={"center"}>
              Property ID :- {id}
            </Heading>
            <FormLabel m={"10px"}>Image URL</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={item.image}
              placeholder="Image"
              size="md"
              name="image"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Owner Name</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={item.owner}
              placeholder="Owner Name"
              size="md"
              name="owner"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Details</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={item.details}
              placeholder="Details"
              size="md"
              name="details"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Building Name</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={item.building}
              placeholder="Building Name"
              size="md"
              name="building"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Carpet Area</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={item.carpet}
              placeholder="Carpet Area"
              size="md"
              name="carpet"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Status</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={item.status}
              placeholder="Status"
              size="md"
              name="status"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Furnishing</FormLabel>
            <Select
              placeholder="Select"
              border={"1px solid #1e7816 "}
              name="furnishing"
              onChange={handleChange}
            >
              <option value="SemiFurnished">Semi-Furnished</option>
              <option value="FullyFurnished">Fully-Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </Select>
            <FormLabel m={"10px"}>facing</FormLabel>
            <Select
              placeholder="Select"
              border={"1px solid #1e7816 "}
              name="facing"
              onChange={handleChange}
            >
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="north">North</option>
              <option value="south">South</option>
            </Select>
            <FormLabel m={"10px"}>overlooking</FormLabel>
            <Select
              placeholder="Select"
              border={"1px solid #1e7816 "}
              name="overlooking"
              onChange={handleChange}
            >
              <option value="garden">Garden</option>
              <option value="main-road">Main-Road</option>
              <option value="mall">Mall</option>
              <option value="city-center">City-Center</option>
            </Select>
            <FormLabel m={"10px"}>ownership</FormLabel>
            <Select
              placeholder="Select"
              border={"1px solid #1e7816 "}
              name="ownership"
              onChange={handleChange}
            >
              <option value="Freehold">Freehold</option>

              <option value="Co-operative Society">Co-operative Society</option>
            </Select>
            <FormLabel m={"10px"}>Bathroom</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={item.bathroom}
              placeholder="Bathroom"
              size="md"
              name="bathroom"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Balcony</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={item.balcony}
              placeholder="Balcony"
              size="md"
              name="balcony"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Total Price</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="text"
              value={item.total_price}
              placeholder="Total Price"
              size="md"
              name="total_price"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Latitude</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={item.latitude}
              placeholder="Latitude"
              size="md"
              name="latitude"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Longitude</FormLabel>
            <Input
              border={"1px solid #1e7816 "}
              type="number"
              value={item.longitude}
              placeholder="Longitude"
              size="md"
              name="longitude"
              onChange={handleChange}
              mb={"10px"}
            />
            <FormLabel m={"10px"}>Description</FormLabel>
            <Textarea
              border={"1px solid #1e7816 "}
              value={item.description}
              placeholder="Description"
              name="description"
              onChange={handleChange}
              mb={"10px"}
              rows="10"
              cols="95"
            ></Textarea>
            <Button
              onClick={handleSubmit}
              colorScheme="green"
              variant="outline"
              display={"block"}
              size="md"
              w={"20%"}
              m={"auto"}
              mt={"20px"}
            >
              Edit Property
            </Button>
          </FormControl>
        </Container>
      </Box>
    </>
  );
};

export default EditProperty;
