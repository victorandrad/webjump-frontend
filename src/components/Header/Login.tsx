import { Flex, Text } from "@chakra-ui/react";

export function Login() {
    return (
        <Flex
            h="30"
            px={["69", "99"]}
            bg="gray.900"
            justify={['center', 'flex-end']}
            align="center"
        >
            <Text
                color="white"
                textDecoration="underline"
                fontSize={["10px", "10px", "16px", "16px"]}
            >
                <b>Acesse sua conta</b>
            </Text>

            <Text
                color="white"
                fontSize={["10px", "10px", "16px", "16px"]}
            >
                &nbsp;ou&nbsp;
            </Text>

            <Text
                color="white"
                textDecoration="underline"
                fontSize={["10px", "10px", "16px", "16px"]}
            >
                <b>Cadastre-se</b>
            </Text>
        </Flex>
    );
}