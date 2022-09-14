import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItems";

export default function Pagination(){
    return(
        <Stack direction="row" mt="8" justify="space-between" align="center" spacing="6">
            <Box>
               <strong>0</strong> até <strong>10</strong> de <strong>100</strong>
            </Box>
          <Stack direction="row" spacing="2">
         <PaginationItem isCurrent number={1}/>
         <PaginationItem number={2}/>
         <PaginationItem number={3}/>
         <PaginationItem number={4}/>
         <PaginationItem number={5}/>
         <PaginationItem number={6}/>
         <PaginationItem number={7}/>
          </Stack>
        </Stack>

    )
}