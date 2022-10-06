import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useBreakpointValue} from "@chakra-ui/react";
import { SidebarNav } from "./SidbarNav";




export function Sidebar() {

    const isFloatingSidebar = useBreakpointValue({
        base: true,
        lg: false
    });

    if(isFloatingSidebar){
        <Drawer isOpen={true} placement="left" onClose={()=>{}}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton mt="6"/>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    }
    return (
        <Box as="aside" w="64" mr="8">
           <SidebarNav/>
        </Box>
    )
}