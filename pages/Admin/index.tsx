import { auth } from "@/Backend/Firebase/firebase";
import LineChartCompo from "@/components/admin/LineChart";
import SidebarWithHeader from "@/components/admin/Navbar";
import PieChartCompo from "@/components/admin/PieChart";
import useToastMsg from "@/customHook/UseToastMsg";
import { State } from "@/redux/store";
import { getUsers } from "@/redux/users/users.action";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Router from "next/router";
import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import { ImStatsDots } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import styles from "../../styles/adminDashboard.module.css";

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { users }: any = useSelector((store: State) => store.usersManager);
  const [mountTime, setMountTime] = useState<string>("");
  const toastMsg = useToastMsg();

  React.useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }

    if (auth.currentUser === null) {
      Router.replace("/");
      toastMsg({
        title: "Please Login first",
        status: "warning",
      });
    }

    getMountTime();
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

          <Flex w={"100%"} gap={"12"} direction={{ base: "column", sm: "column", md: "column", lg: "row" }} justifyContent={"space-around"}>
            <Flex color={"white"} px={"4"} flex={"1"} py={"7"} borderRadius={"12"} justifyContent={"center"} alignItems={"center"} bgGradient="linear(to-b, #a32424, #ee3e38)">
              <Flex direction={"column"}>
                <Heading size={{ md: "xl", lg: "lg", xl: "xl" }}>Users</Heading>
                <Text as={"b"}>{users.length}</Text>
                <Text color={"gray.200"}>Last updated: {mountTime} </Text>
              </Flex>
              <Flex bgColor={"white"} p={"2"} borderRadius={"50%"} color={"#a32424"}>
                <FaUsers fontSize={"40px"} />
              </Flex>
            </Flex>

            <Flex color={"white"} px={"4"} flex={"1"} py={"7"} borderRadius={"12"} justifyContent={"center"} alignItems={"center"} bgGradient="linear(to-b, #a32424, #ee3e38)">
              <Flex direction={"column"}>
                <Heading size={{ md: "xl", lg: "lg", xl: "xl" }}>Total Orders</Heading>
                <Text as={"b"}>12345</Text>
                <Text color={"gray.200"}>Last updated: {mountTime}</Text>
              </Flex>
              <Flex bgColor={"white"} p={"2"} borderRadius={"50%"} color={"#a32424"}>
                <VscProject fontSize={"40px"} style={{ rotate: "180deg" }} />
              </Flex>
            </Flex>

            <Flex color={"white"} px={"4"} flex={"1"} py={"7"} borderRadius={"12"} justifyContent={"center"} alignItems={"center"} bgGradient="linear(to-b, #a32424, #ee3e38)">
              <Flex direction={"column"}>
                <Heading size={{ md: "xl", lg: "lg", xl: "xl" }}>Total Sale</Heading>
                <Text as={"b"}>₹ 12,345.00 /-</Text>
                <Text color={"gray.200"}>Last updated: {mountTime} </Text>
              </Flex>
              <Flex bgColor={"white"} p={"2"} borderRadius={"50%"} color={"#a32424"}>
                <GiMoneyStack fontSize={"40px"} />
              </Flex>
            </Flex>
          </Flex>

          {/* Chart section */}

          <Flex direction={{base:"column",xl:"row"}} textAlign={"center"} w={"100%"} h={"100%"}>
            <Flex  justifyContent={"center"} alignItems={"center"} direction={"column"} mt={"5"} width={"100%"} height={"100%"}>
              <Heading size={"md"} as={"h2"}>
                Revenue & Users graph
              </Heading>
              <Flex justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"} >
                <LineChartCompo />
              </Flex>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} direction={"column"} mt={"5"} width={"100%"} height={"100%"}>
              <Flex justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"}>
                <PieChartCompo />
              </Flex>
              <Heading size={"md"} as={"h2"}>
                Users Details
              </Heading>
            </Flex>
          </Flex>
        </div>
      </SidebarWithHeader>
    </>
  );
};

export default Home;
