import { auth } from "@/Backend/Firebase/firebase";
import LineChartCompo from "@/components/admin/LineChart";
import SidebarWithHeader from "@/components/admin/Navbar";
import PieChartCompo from "@/components/admin/PieChart";
import useToastMsg from "@/customHook/UseToastMsg";
import { getOrderAPI, getTotalSaleAPI } from "@/redux/orders/orders.api";
import { State } from "@/redux/store";
import { getUsers } from "@/redux/users/users.action";
import { Flex, Box } from "@chakra-ui/react";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import styles from "../../styles/adminDashboard.module.css";

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { users }: any = useSelector((store: State) => store.usersManager);
  const [orders, setOrders] = useState<any>([]);
  const [sale, setSale] = useState<any>(0);
  const [mountTime, setMountTime] = useState<string>("");
  const toastMsg = useToastMsg();

  const getOrder = async () => {
    const data = await getOrderAPI();
    const total = await getTotalSaleAPI();
    setSale(total);
    setOrders(data);
  };

  React.useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }
    if (auth.currentUser === null) {
      toastMsg({
        title: "Please Login first",
        status: "warning",
      });
      Router.replace("/");
    }
    getMountTime();
    getOrder();
  }, []);

  const getMountTime = () => {
    setMountTime(new Date().toLocaleString());
  };
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
                <p>{orders.length}</p>
                <p>Last updated: {mountTime}</p>
              </Box>
              <Box className={styles.cardLogo}>
                <VscProject />
              </Box>
            </Box>

            <Box className={styles.overviewCard}>
              <Box>
                <h2>Total Sale</h2>
                <p>{sale}</p>
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
              <Box>
                <LineChartCompo />
              </Box>
            </Flex>
            <Flex>
              <Box>
                <PieChartCompo />
              </Box>
            </Flex>
          </div>
        </div>
      </SidebarWithHeader>
    </>
  );
};

export default Home;
