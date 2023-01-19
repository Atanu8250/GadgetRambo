import LineChartCompo from '@/components/admin/LineChart'
import SidebarWithHeader from '@/components/admin/Navbar'
import PieChartCompo from '@/components/admin/pieChart'
import { Flex, Box, HStack, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import { VscProject } from 'react-icons/vsc'

import styles from '../../styles/adminDashboard.module.css'


type Props = {}


const home = (props: Props) => {
  return (
    <>
      <Head>
        <title>GadgetRambo: admin</title>
      </Head>
      <SidebarWithHeader>
        <div className={styles.dashboard}>

          {/* overview cards */}

          <Flex>
            <Box className={styles.overviewCard}>
              <Box>
                <h2>Users</h2>
                <p>12345</p>
                <p>Last updated: 6 min ago </p>
              </Box>
              <Box>
                <FaUsers />
              </Box>
            </Box>

            <Box className={styles.overviewCard}>
              <Box>
                <h2>Total Orders</h2>
                <p>12345</p>
                <p>Last updated: 6 min ago</p>
              </Box>
              <Box>
                <VscProject />
              </Box>
            </Box>

            <Box className={styles.overviewCard}>
              <Box>
                <h2>Total Sale</h2>
                <p>₹ 12,345.00 /-</p>
                <p>Last updated: 6 min ago</p>
              </Box>
              <Box>
                <GiMoneyStack />
              </Box>
            </Box>
          </Flex>


          {/* Chart section */}

          <Flex>
            <Box>
              <LineChartCompo />
            </Box>
            <Box>
              <PieChartCompo />
            </Box>
          </Flex>
        </div>
      </SidebarWithHeader>
    </>
  )
}

export default home