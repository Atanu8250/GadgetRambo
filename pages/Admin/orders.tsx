import SidebarWithHeader from '@/components/admin/Navbar'
import UnderConstruction from '@/components/underConstruction'
import { Box, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Orders = (props: Props) => {
  return (
    <>
      <Head>
        <title>GadgetRambo: Orders</title>
      </Head>
      <SidebarWithHeader active='Orders'>
        <UnderConstruction />
      </SidebarWithHeader>
    </>
  )
}

export default Orders