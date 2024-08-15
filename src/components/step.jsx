import React from "react";
import * as C from "@chakra-ui/react";

const Step = ({ index, active }) => {
  return (
    <C.Center>
      <C.Box
        py={3}  
        px={4}
        borderRadius="md"  
        bg={active ? "green.500" : "gray.300"}
        color={active ? "white" : "black"}
        transform={active ? "scale(1.2)" : "scale(1)"}  
        transition="transform 0.3s ease"  
        fontSize="lg" 
        fontWeight="bold" 
        textAlign="center"  
      >
        {index}
      </C.Box>
    </C.Center>
  );
};

export default Step;
