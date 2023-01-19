import { googleAuth, login, logout, signupWithEmailAndPwd } from '@/redux/auth/auth.action'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
// import State from '../../redux/store'

const Index = () => {

  const store = useSelector(store=> store.authManager)
  console.log('store:', store)

  // ! Dummy signup with email and password
  const signupFormRef = React.useRef<HTMLFormElement>(null)
  const loginFormRef = React.useRef<HTMLFormElement>(null)
  const dispatch: Dispatch<any> = useDispatch()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    dispatch(signupWithEmailAndPwd({ email: signupFormRef.current?.email.value, password: signupFormRef.current?.password.value }))
  }

  const signInWithGoogle: React.MouseEventHandler<HTMLButtonElement> = async () => {
    dispatch(googleAuth())
  }


  const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    dispatch(login({ email: loginFormRef.current?.email.value, password: loginFormRef.current?.password.value }))
  }

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> =  () => {
    dispatch(logout())
  }

  return (
    <>
      <h1>Not Available page</h1>
      <form ref={signupFormRef} onSubmit={handleSubmit}>
        <input placeholder='email' name="email" />
        <input placeholder='password' name="password" />
        <input type="submit" value="Signup" />
      </form>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      <Button onClick={handleLogout}>Logout</Button>

      <br />
      <br />
      <br />

      <form ref={loginFormRef} onSubmit={handleLogin}>
        <input placeholder='email' name="email" />
        <input placeholder='password' name="password" />
        <input type="submit" value="login" />
      </form>
    </>
  )
}

export default Index
