import SidebarWithHeader from '@/components/admin/Navbar'
import UnderConstruction from '@/components/underConstruction'
import { Box, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Settings = (props: Props) => {
  return (
    <>
      <Head>
        <title>GadgetRambo: Settings</title>
      </Head>
      <SidebarWithHeader active='Settings'>
        <UnderConstruction />
      </SidebarWithHeader>
    </>
  )
}

export default Settings