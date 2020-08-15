import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const MenuItems: React.FC = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export default MenuItems;
