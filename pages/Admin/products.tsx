import SidebarWithHeader from '@/components/admin/Navbar'
import React from 'react'
import Head from 'next/head'

type Props = {}

const Products = (props: Props) => {
  return (
  <>
    <Head>
    <title>GadgetRambo: Products</title>
    </Head>
    <SidebarWithHeader>
      <div>Products</div>
    </SidebarWithHeader>
  </>
  )
}

export default Products