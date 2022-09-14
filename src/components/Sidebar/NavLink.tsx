import { Icon, Link, Text, LinkProps as ChakraUiProps } from "@chakra-ui/react";
import { ElementType } from "react"

interface NavLinikProps extends ChakraUiProps {
    icon: ElementType;
    children: string;

}

export function NavLink({icon, children, ...rest}: NavLinikProps) {
    return (
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}