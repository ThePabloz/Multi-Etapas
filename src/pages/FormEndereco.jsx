import * as C from "@chakra-ui/react";
import { Global } from "@emotion/react";

const FormEndereco = () => {
  return (
    <>
      {/* Estilização global para o Select */}
      <Global
        styles={{
          'select': {
            backgroundColor: '#333',  // Fundo escuro
            color: '#fff',  // Texto branco
            border: '1px solid #444',
            borderRadius: '4px',
            padding: '8px',
            fontSize: '16px',
          },
          'option': {
            backgroundColor: '#333',  // Fundo escuro para opções
            color: '#fff',  // Texto branco para opções
          },
          'select:focus': {
            borderColor: '#4CAF50',  // Cor da borda no foco
            boxShadow: '0 0 0 1px #4CAF50',
          },
        }}
      />
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
          Endereço
        </C.Heading>

        <C.Input
          type="text"
          placeholder="CEP"
          variant="outline"
          bg="gray.700"
          color="white"
          _placeholder={{ color: "gray.400" }}
          _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
        />
        <C.Input
          type="text"
          placeholder="Bairro"
          variant="outline"
          bg="gray.700"
          color="white"
          _placeholder={{ color: "gray.400" }}
          _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
        />
        <C.Input
          type="text"
          placeholder="Cidade"
          variant="outline"
          bg="gray.700"
          color="white"
          _placeholder={{ color: "gray.400" }}
          _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px teal.500" }}
        />

        <C.FormControl>
          <C.FormLabel htmlFor="uf" fontSize="lg" fontWeight="bold">
            UF
          </C.FormLabel>
          <C.Select
            id="uf"
            placeholder="Selecione o UF"
            variant="outline"
          >
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </C.Select>
        </C.FormControl>
      </C.VStack>
    </>
  );
};

export default FormEndereco;
