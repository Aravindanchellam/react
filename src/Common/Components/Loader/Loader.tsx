import { HStack, Heading, Spinner } from "native-base";
import React from "react";

const Loader = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner color={"#fff"} accessibilityLabel="Loading posts" />
      <Heading color="#fff" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};

export default Loader;
