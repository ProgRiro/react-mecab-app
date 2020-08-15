import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Flex } from "@chakra-ui/core";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Flex direction="column">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};
