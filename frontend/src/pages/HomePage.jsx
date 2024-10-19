import React from "react";
import { Link } from "react-router-dom";

import { Container, Text, VStack, SimpleGrid, Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW={Container.xl} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}></SimpleGrid>

        <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          No products found🥲
          {/* This link tag should be coming from react router instead of chakra ui */}
          <Link to={"/create"}>
            <Text as={"span"} color={"blue.500"} _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
