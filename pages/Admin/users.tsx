import SidebarWithHeader from '@/components/admin/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const users = (props: Props) => {
  return (
    <>
    <Head>
    <title>GadgetRambo: Users</title>
    </Head>
    <SidebarWithHeader>
      <div>Users</div>
    </SidebarWithHeader>
  </>
  )
}

export default users