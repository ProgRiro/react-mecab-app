import React from "react";
import { Flex, Text } from "@chakra-ui/core";

const Footer: React.FC = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      wrap="wrap"
      padding="1.2rem"
      bg="teal.500"
      color="white"
      pt={10}
    >
      <Text fontSize="xs">© 2020 progriro</Text>
    </Flex>
  );
};

export default Footer;
