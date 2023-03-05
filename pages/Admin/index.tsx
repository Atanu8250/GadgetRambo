import { auth } from '@/Backend/Firebase/firebase'
import LineChartCompo from '@/components/admin/LineChart'
import SidebarWithHeader from '@/components/admin/Navbar'
import PieChartCompo from '@/components/admin/PieChart'
import useToastMsg from '@/customHook/UseToastMsg'
import { State } from '@/redux/store'
import { getUsers } from '@/redux/users/users.action'
import { Flex, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Router from 'next/router'
import React, { useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import { VscProject } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'

import styles from '../../styles/adminDashboard.module.css'


const Home = () => {

  const dispatch: Dispatch<any> = useDispatch();
  const { users }:any = useSelector((store:State) => store.usersManager)
  const [mountTime, setMountTime] = useState<string>("");
  const toastMsg = useToastMsg();

  React.useEffect(() => {
    if (!users.length) {
      dispatch(getUsers())
    }

    if(auth.currentUser === null){
      Router.replace("/");
      toastMsg({
        title: "Please Login first",
        status: "warning"
      })
    }
    
    getMountTime()
  }, [])

  const getMountTime = () => {
    setMountTime(new Date().toLocaleString())
  }


  return (
    <>
      <Head>
        <title>GadgetRambo: admin</title>
      </Head>
      <SidebarWithHeader active="Dashboard">
        <div className={styles.dashboard}>

          {/* overview cards */}

          <div className={styles.flex}>
            <Box className={styles.overviewCard}>
              <Box>
                <h2>Users</h2>
                <p>{users.length}</p>
                <p>Last updated: {mountTime} </p>
              </Box>
              <Box className={styles.cardLogo}>
                <FaUsers />
              </Box>
            </Box>

            <Box className={styles.overviewCard}>
              <Box>
                <h2>Total Orders</h2>
                <p>12345</p>
                <p>Last updated: {mountTime}</p>
              </Box>
              <Box className={styles.cardLogo}>
                <VscProject />
              </Box>
            </Box>

            <Box className={styles.overviewCard}>
              <Box>
                <h2>Total Sale</h2>
                <p>₹ 12,345.00 /-</p>
                <p>Last updated: {mountTime} </p>
              </Box>
              <Box className={styles.cardLogo}>
                <GiMoneyStack />
              </Box>
            </Box>
          </div>


          {/* Chart section */}

          <div className={styles.graph}>
            <Flex>
              <h2>Revenue & users graph</h2>
              <Box>
                <LineChartCompo />
              </Box>
            </Flex>
            <Flex>
              <h2>Users details</h2>
              <Box>
                <PieChartCompo />
              </Box>
            </Flex>
          </div>
        </div>
      </SidebarWithHeader>
    </>
  )
}

export default Home