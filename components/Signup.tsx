import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from "@chakra-ui/react";
import style from "../styles/Signup.module.css"
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { googleAuth, signupWithEmailAndPwd } from "@/redux/auth/auth.action";
import { Dispatch } from 'redux'
import useToastMsg from "@/customHook/UseToastMsg";
import { State } from "@/redux/store";


const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const dispatch: Dispatch<any> = useDispatch()
  const { loading } = useSelector((store: State) => store.authManager)


  const toastMsg = useToastMsg()

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    dispatch(signupWithEmailAndPwd({ email, password }, toastMsg))
    setEmail("");
    setPassword("");
  };

  const handleGoogleSignup = () => {
    dispatch(googleAuth(toastMsg))
  }


  return (
    <div>
      <div onClick={onOpen} className={style.loginButton}>
        Signup
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 className={style.loginHead}>SIGNUP</h1>
            <form>
              <h3 className={style.loginHeadBase}>Email</h3>
              <InputGroup>
                <Input
                  type="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={(e) => userHandler(e)}
                />
              </InputGroup>
              <h3 className={style.loginHeadBase}>Password</h3>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  value={password}
                  placeholder="Create Password"
                  onChange={(e) => passwordHandler(e)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <br />
              <div style={{ textAlign: "center" }}>
                <Button
                  colorScheme="red"
                  onClick={handleSignUp}
                  isLoading={loading}
                  loadingText="Signing up"
                >Sign Up</Button>
              </div>
            </form>
            <div>
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Button
                  style={{ borderRadius: "100px", padding: "1.5rem" }}
                  onClick={handleGoogleSignup}
                  isLoading={loading}
                  loadingText="Signing up"
                >
                  <Icon as={FcGoogle} boxSize={6} />
                  <h3 style={{ paddingLeft: "0.5rem" }}>SIGNUP WITH GOOGLE</h3>
                </Button>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signup;
