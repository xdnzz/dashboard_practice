import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./Search";

export function Header() {
    return (
        <Flex
            as="header"
            w="w00%"
            maxWidth={1488}
            h="28"
            mx="auto"
            px="6"
            mt="4"
            align="center"
        >
            <Logo/>
            <SearchBox/>
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile />
            </Flex>
        </Flex>

    )
}