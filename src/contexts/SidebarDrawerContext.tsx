// import { useDisclosure } from "@chakra-ui/core";
import { UseDisclosureReturn, useDisclosure, useFocusEffect } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


interface SidebarDrawerContextProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn 

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);
const router = useRouter()
const disclosure = useDisclosure()

useEffect(()=> {
    disclosure.onClose()
}, [router.asPath])


export function SidebarDrawerProvider({children}:SidebarDrawerContextProps){
    const disclosure = useDisclosure()
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)