import * as C from "@chakra-ui/react";
import { useState } from "react";

const FormProjeto = () => {
  const [projetosSelecionados, setProjetosSelecionados] = useState([]);

  const handleCheckboxChange = (value) => {
    setProjetosSelecionados((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

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
      <C.Heading as="h1" size="xl" mb={6}>
        Projeto
      </C.Heading>

      <C.Input
        type="text"
        placeholder="Projeto"
        variant="outline"
        bg="gray.700"
        color="white"
        _placeholder={{ color: "gray.400" }}
        _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
      />
      <C.Input
        type="text"
        placeholder="Área"
        variant="outline"
        bg="gray.700"
        color="white"
        _placeholder={{ color: "gray.400" }}
        _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
      />
      <C.Input
        type="text"
        placeholder="Coordenador/Professor"
        variant="outline"
        bg="gray.700"
        color="white"
        _placeholder={{ color: "gray.400" }}
        _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
      />

      <C.FormControl as="fieldset">
        <C.FormLabel as="legend" fontSize="lg" fontWeight="bold">
          Selecione os Projetos
        </C.FormLabel>
        <C.Stack spacing={3}>
          <C.Checkbox
            value="CETCC"
            onChange={(e) => handleCheckboxChange(e.target.value)}
            isChecked={projetosSelecionados.includes("CETCC")}
            colorScheme="teal"
          >
            CETCC
          </C.Checkbox>

          <C.Checkbox
            value="CETAFAJU"
            onChange={(e) => handleCheckboxChange(e.target.value)}
            isChecked={projetosSelecionados.includes("CETAFAJU")}
            colorScheme="teal"
          >
            CETAFAJU
          </C.Checkbox>

          <C.Checkbox
            value="CETICC"
            onChange={(e) => handleCheckboxChange(e.target.value)}
            isChecked={projetosSelecionados.includes("CETICC")}
            colorScheme="teal"
          >
            CETICC
          </C.Checkbox>

          <C.Checkbox
            value="CETAFEST"
            onChange={(e) => handleCheckboxChange(e.target.value)}
            isChecked={projetosSelecionados.includes("CETAFEST")}
            colorScheme="teal"
          >
            CETAFEST
          </C.Checkbox>
        </C.Stack>
      </C.FormControl>
    </C.VStack>
  );
};

export default FormProjeto;
