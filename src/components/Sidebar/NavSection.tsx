import { Link, Box, Text, Stack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";



interface navSectionProps {
title: string;
children: ReactNode;


}


export function NavSection({title, children}: navSectionProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch"></Stack>
            {children}
        </Box>
    )
}