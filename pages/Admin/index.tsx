import SidebarWithHeader from '@/components/admin/Navbar'
import { Flex, Box } from '@chakra-ui/react'
import React from 'react'


type Props = {}


const home = (props: Props) => {
  return (
    <div>
        <SidebarWithHeader>
          <div>hello from deshboard</div>
          <Flex>
                <Box>
                  
                </Box>
            </Flex>
        </SidebarWithHeader>
    </div>
  )
}

export default home