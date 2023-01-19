import SidebarWithHeader from '@/components/admin/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Orders = (props: Props) => {
  return (
    <>
      <Head>
        <title>GadgetRambo: Orders</title>
      </Head>
      <SidebarWithHeader>
        <div>Orders</div>
      </SidebarWithHeader>
    </>
  )
}

export default Orders