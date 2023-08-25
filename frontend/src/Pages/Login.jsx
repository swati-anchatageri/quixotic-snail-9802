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
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = () => {
    const data = {
      pass,
      email,
    };
    console.log(data);
  };
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
              value={pass}
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
