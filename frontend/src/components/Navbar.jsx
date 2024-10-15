import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgClip="text"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
      </Flex>
    </Container>
  );
};

export default Navbar;
