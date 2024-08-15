import * as C from "@chakra-ui/react";
import { useState } from "react";
import Step from "./components/step";
import FormPessoal from "./pages/FormPessoal";
import FormProjeto from "./pages/FormProjeto";
import FormEndereco from "./pages/FormEndereco";

function App() {
  const [step, setStep] = useState(1);
  const Steps = [1, 2, 3];

  const getStep = () => {
    switch (step) {
      case 1:
        return <FormPessoal />;
      case 2:
        return <FormEndereco />;
      case 3:
        return <FormProjeto />;
      default:
        return <FormPessoal />;
    }
  };

  return (
    <C.Flex h="100vh" align="center" justify="center" bg="gray.900">
      <C.Center
        maxW={600}
        w="100%"
        py={10}
        px={6}
        flexDirection="column"
        border="2px solid #4CAF50"
        borderRadius="md"
        bg="gray.800"
        boxShadow="lg"
      >
        <C.HStack spacing={4} mb={6}>
          {Steps.map((item) => (
            <Step key={item} index={item} active={step === item} />
          ))}
        </C.HStack>
        <C.Divider my={4} borderColor="gray.600" />

        <C.Box w="100%" maxW="lg">
          {getStep()}
        </C.Box>

        <C.HStack mt={6} spacing={8}>
          <C.Button
            bg="gray.700"
            color="white"
            _hover={{ bg: "gray.600" }}
            onClick={() => step !== 1 && setStep(step - 1)}
            disabled={step === 1}
          >
            Voltar
          </C.Button>

          <C.Button
            bg="#4CAF50"
            color="white"
            _hover={{ bg: "#45a049" }}
            onClick={() => step !== 3 && setStep(step + 1)}
          >
            {step === 3 ? "Enviar" : "Próximo"}
          </C.Button>
        </C.HStack>
      </C.Center>
    </C.Flex>
  );
}

export default App;
