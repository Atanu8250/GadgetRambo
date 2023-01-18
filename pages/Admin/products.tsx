import SidebarWithHeader from '@/components/admin/Navbar'
import React from 'react'
import Head from 'next/head'

type Props = {}

const products = (props: Props) => {
  return (<>
    <Head>
    <title>hurry!</title>
    </Head>
    <SidebarWithHeader>
      <div>products</div>
    </SidebarWithHeader>
  </>
  )
}

export default products