import { Flex, Box, Text, Avatar} from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="center">
                <Text>
                    Dio Brando
                </Text>
                <Text color="gray.300" fontSize="small">
                    diobrando@imortal.shell
                </Text>
            </Box>
            <Avatar size="md" name="Dio Brando" src="https://github.com/xdnzz.png" />
        </Flex>
    )
}