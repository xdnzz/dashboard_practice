import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./Search";

export function Header() {

    const isWideVersion = useBreakpointValue({
        base:false,
        lg: true
    })
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
            {isWideVersion && (
                <SearchBox/>
            )}
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>

    )
}