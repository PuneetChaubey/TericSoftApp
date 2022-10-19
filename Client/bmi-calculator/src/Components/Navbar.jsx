import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";
import { handlelogout } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const auth = useSelector((store) => store.AuthReducer.isAuth);
    console.log(auth) 
    const dispatch = useDispatch();
  return (
    <Box w="100vw" border="1px solid gray" h="90px" paddingRight="50px">
      <Flex justifyContent="space-around" alignItems="center" h="100%">
        <RouterLink to="/">
          <Button>Home Page</Button>
        </RouterLink>

        {!auth ? (
          <RouterLink to="/login">
            <Button>Login</Button>
          </RouterLink>
        ) : (
          <RouterLink to="/login">
            <Button  onClick={() => dispatch(handlelogout("token"))} >Logout</Button>
          </RouterLink>
        )}
        <RouterLink to="/signup">
          {" "}
          <Button>Signup</Button>
        </RouterLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
