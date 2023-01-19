import SidebarWithHeader from '@/components/admin/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const Settings = (props: Props) => {
  return (
    <>
    <Head>
    <title>GadgetRambo: Settings</title>
    </Head>
    <SidebarWithHeader>
      <div>Settings</div>
    </SidebarWithHeader>
  </>
  )
}

export default Settings