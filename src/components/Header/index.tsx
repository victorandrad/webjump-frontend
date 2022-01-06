import { Flex, Image } from "@chakra-ui/react";
import { SearchBar } from "../SearchBar";
import { Login } from "./Login";

export function Header() {
    return (
        <>
            <Login />
            <Flex
                as="header"
                h="114"
                bg="gray.100"
                px={["29", "99"]}
                align="center"
                justify="space-between"
            >
                <Image
                    h="16"
                    src="/logo.png"
                />

                <SearchBar />
            </Flex>
        </>
    );
}