import PropertyCard from "./propertyCard"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Heading } from "@chakra-ui/react";
const PropertyList=()=>{
const [property,setProperty]=useState([])
const [isLoading,setIsLoading]=useState(false)
const getData=()=>{
    setIsLoading(true)
    axios
      .get(`https://homesweeter.onrender.com/property`)
      .then((res) => {
        console.log(res.data);
        setProperty(res.data)
        setIsLoading(false)
        localStorage.setItem("admintoken", res.data.token);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData()
  }, []);

  console.log(property);

  if (isLoading) {
    return (
      <Heading size={"2xl"} mt={"10%"} textAlign={"center"}>
        Loading....
      </Heading>
    );
  }
  return (
    <>
      <Container maxW="container.1xl">
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap={6}
          mb="20px"
          mt={"60px"}
        >
          {property.length > 0 &&
            property.map((el) => {
              return <PropertyCard key={el._id} {...el} />;
            })}
        </Grid>
      </Container>
    </>
  );
}
export default PropertyList