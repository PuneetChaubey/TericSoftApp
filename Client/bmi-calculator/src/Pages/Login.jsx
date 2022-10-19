import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Checkbox,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import {useDispatch, useSelector} from "react-redux"
import { login } from "../Redux/AuthReducer/action";
import { saveLocalData } from "../Utils/LocalStorage";

export default function Login() {
    const isAuth = useSelector(store => store.AuthReducer.isAuth)
    console.log(isAuth)
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });

     const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClick = () => {
      dispatch(login(loginCred)).then((res) => {
          console.log(res)
          if (res.massage){
           alert(res.massage);
          }
          else {
              alert(res);
          }
      const token = res.token;
          if (token) {
         saveLocalData("token", token);
          navigate("/");
          }
          
   });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                value={loginCred.email}
                onChange={(e) =>
                  setLoginCred({
                    ...loginCred,
                    email: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={loginCred.password}
                onChange={(e) =>
                  setLoginCred({ ...loginCred, password: e.target.value })
                }
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleClick}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                New user signup first?{" "}
                <RouterLink color={"blue.400"} to="/signup">
                  Signup
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
