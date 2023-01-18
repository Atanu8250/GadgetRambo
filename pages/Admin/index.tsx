import Dashboard from '@/components/admin/Dashboard'
import SidebarWithHeader from '@/components/admin/Navbar'
import React from 'react'

type Props = {}


const home = (props: Props) => {
  return (
    <div>
        <SidebarWithHeader><Dashboard/></SidebarWithHeader>
    </div>
  )
}

export default home
