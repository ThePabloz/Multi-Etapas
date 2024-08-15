import * as C from "@chakra-ui/react";
import { useState } from "react";

const FormPessoal = () => {
  const [genero, setGenero] = useState("");

  return (
    <C.VStack
      spacing={6}
      p={8}
      borderRadius="md"
      boxShadow="md"
      bg="gray.800"
      color="white"
      maxWidth="600px"
      mx="auto"
    >
      <C.Heading as="h1" size="xl" mb={6} textAlign="center">
        Informações Pessoais
      </C.Heading>

      <C.Input
        type="text"
        placeholder="Inserir nome"
        variant="outline"
        bg="gray.700"
        color="white"
        _placeholder={{ color: "gray.400" }}
        _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
      />
      <C.Input
        type="text"
        placeholder="CPF"
        variant="outline"
        bg="gray.700"
        color="white"
        _placeholder={{ color: "gray.400" }}
        _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
      />
      <C.Input
        type="email"
        placeholder="Email"
        variant="outline"
        bg="gray.700"
        color="white"
        _placeholder={{ color: "gray.400" }}
        _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
      />

      <C.FormControl as="fieldset" mt={4}>
        <C.FormLabel as="legend" fontSize="lg" fontWeight="bold">
          Gênero
        </C.FormLabel>
        <C.RadioGroup onChange={setGenero} value={genero}>
          <C.HStack spacing={5}>
            <C.Radio
              value="masculino"
              colorScheme="teal"
              size="lg"
              _focus={{ boxShadow: "0 0 0 1px teal.500" }}
            >
              Masculino
            </C.Radio>
            <C.Radio
              value="feminino"
              colorScheme="teal"
              size="lg"
              _focus={{ boxShadow: "0 0 0 1px teal.500" }}
            >
              Feminino
            </C.Radio>
          </C.HStack>
        </C.RadioGroup>
      </C.FormControl>
    </C.VStack>
  );
}

export default FormPessoal;
