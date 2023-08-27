import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const savedToken = localStorage.getItem("ZillowToken");
  const savedRefreshToken = localStorage.getItem("Rtoken");

  const [email, setEmail] = useState("");
  const [ password, setPass ] = useState("");
  
  const handleLogin = async () => {
    const data = {
      password,
      email,
    };

    try {
      const response = await axios.post(
        "https://homesweeter.onrender.com/users/login",
        data
      );
      console.log(response.data);
      const { token, refreshToken } = response.data;

      localStorage.setItem("ZillowToken", token);
      localStorage.setItem("Rtoken", refreshToken);
      Navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  if (savedToken && savedRefreshToken) {
   
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Stack p={10} minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={handleLogin}
              colorScheme={"blue"}
              variant={"solid"}>
              Sign in
            </Button>
          </Stack>
          <Box align={"center"}>
            New User?{" "}
            <Link to={"/register"}>
              <Text color={"blue.400"}>Register</Text>
            </Link>
          </Box>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          borderRadius="lg"
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </Flex>
    </Stack>
  );
}
