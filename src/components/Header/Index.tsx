import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./Search";

export function Header() {
const {onOpen} = useSidebarDrawer()
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

            {!isWideVersion && (
                <IconButton
                aria-label="Open navigation"    
                icon={<Icon as={RiMenuLine}/>}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                mr="2"
                >

                </IconButton>
            )}
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