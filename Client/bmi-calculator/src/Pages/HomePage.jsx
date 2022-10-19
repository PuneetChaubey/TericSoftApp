import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, getData } from "../Redux/AppReducer/action.js";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
const HomePage = () => {
  const data = useSelector((store) => store.AppReducer.data);
  const dispatch = useDispatch();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = () => {
    dispatch(addData({ height, weight })).then((res) => {
       dispatch(getData());
      setHeight("");
      setWeight("");
    });
  };

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, [data.length,dispatch]);
  return (
    <>
      <Flex w="90%" margin="auto">
        <Box w="40%">
          <FormControl w="70%">
            <FormLabel>Height</FormLabel>
            <Input
              type="number"
              placeholder="Enter Height in Feet.."
              value={height}
              onChange={(e) => {
               
                setHeight(e.target.value, );
              }}
             
            />
            <FormLabel>Weight</FormLabel>
            <Input
              type="text"
              placeholder="Enter Weight in Kg.."
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
            />
            <Button onClick={handleSubmit}>Submit</Button>
          </FormControl>
        </Box>
        <TableContainer w="50%" margin="auto">
          <Table variant="striped" colorScheme="teal">
            <TableCaption>BMI Calculator </TableCaption>
            <Thead>
              <Tr>
                <Th>S.No.</Th>
                <Th>Height(Feet)</Th>
                <Th>Wight(Kg)</Th>
                <Th isNumeric>BMI</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((el, ind) => {
                return (
                  <Tr key={uuid()}>
                    <Td>{ind}</Td>
                    <Td>{el.height}</Td>
                    <Td>{el.weight}</Td>
                    <Td isNumeric>{el.bmi}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default HomePage;
