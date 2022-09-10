import { Button, Flex, FormLabel, Input, Stack, FormControl } from '@chakra-ui/react';

export default function Home() {
  return (

    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" type="email/" focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: "gray.900" }} size="lg"></Input>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="senha">Senha</FormLabel>
            <Input id="senha" name="senha" type="password/" focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: "gray.900" }} size="lg"></Input>
          </FormControl>

        </Stack>
        <Button type="submit" mt="6" colorScheme="pink">Entrar</Button>
      </Flex>
    </Flex >


  )
}
