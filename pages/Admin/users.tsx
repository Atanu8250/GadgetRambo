import SidebarWithHeader from '@/components/admin/Navbar'
import { State } from '@/redux/store'
import { getUsers, updateUser } from '@/redux/users/users.action'
import { deleteUserAPI } from '@/redux/users/users.api'
import { Badge, Button, Divider, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import styles from "../../styles/Users.module.css"
import { intrfcUser } from '../../constants/constants'

const Users = () => {

  const dispatch: Dispatch<any> = useDispatch();
  const { users }:{users:Array<intrfcUser>} = useSelector((store:State) => store.usersManager)
  const [changeby, setChangeby] = React.useState<boolean>(false)

  useEffect(() => {
      dispatch(getUsers())
  }, [users,changeby])


  return (
    <>
      <Head>
        <title>GadgetRambo: Users</title>
      </Head>
      <SidebarWithHeader active='Users'>
        <div>
          <TableContainer overflowX={"hidden"}>
            <Table variant='simple'>
              <TableCaption>User Management</TableCaption>
              <Thead>
                <Tr className={styles.header}>
                  <Th>Details</Th>
                  <Th className={styles.largeScreen}>Status</Th>
                  <Th className={styles.modification}>Modification</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users.map((user: intrfcUser) => <Tr key={user.uid}>
                    <Th className={styles.smallScreen}>
                    UId: {user.uid}
                    <br />
                    Email: {user.email}
                    <br />
                    <Badge colorScheme={user.isActive ? "green" : "red"}>{user.isActive ? "Active" : "Inactive"}</Badge>
                    <br />
                    Last SignIn: {user.lastSignInTime}
                    </Th>
                    <Th className={styles.miniScreen}>
                    Id:{user.uid}
                    <br />
                    Mail: {user.email}
                    <br />
                    <Badge colorScheme={user.isActive ? "green" : "red"}>{user.isActive ? "Active" : "Inactive"}</Badge>
                    <br />
                    Last SignIn: {user.lastSignInTime}
                    <br />
                    <Button colorScheme={"blue"} marginTop={"0.5rem"} marginRight={"0.3rem"} onClick={() => {
                      dispatch(updateUser(user.uid, {isAdmin: !user.isAdmin}))
                    }}>{
                      user.isAdmin ? "Dismis as Admin" : "Set as Admin"
                    }</Button>
                    <Button colorScheme={"red"} onClick={() => { 
                        deleteUserAPI(user.uid).then(() => {setChangeby(!changeby)})
                     }}>Delete</Button>
                    </Th>
                    <Th className={styles.largeScreen}>UId: {user.uid}<br />Email: {user.email}</Th>
                    <Th className={styles.largeScreen}><Badge colorScheme={user.isActive ? "green" : "red"}>{user.isActive ? "Active" : "Inactive"}</Badge><br />{user.lastSignInTime}</Th>
                    <Th className={styles.modification}><Button colorScheme={"blue"} marginBottom={"0.2rem"} onClick={() => {
                      dispatch(updateUser(user.uid, {isAdmin: !user.isAdmin}))
                    }}>{
                      user.isAdmin ? "Dismis as Admin" : "Set as Admin"
                    }</Button> <br />
                    <Button colorScheme={"red"} onClick={() => { 
                        deleteUserAPI(user.uid).then(() => {setChangeby(!changeby)})
                     }}>Delete</Button>
                    </Th>
                    <Divider colorScheme="black" height={"1rem"}/>
                  </Tr>)
                }
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </SidebarWithHeader>
    </>
  )
}

export default Users