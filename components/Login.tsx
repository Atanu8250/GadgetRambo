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
import style from "../styles/Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { googleAuth, login } from "@/redux/auth/auth.action";
import { Dispatch } from "redux";
import useToastMsg from "@/customHook/UseToastMsg";
import { State } from "@/redux/store";

const Login = () => {
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

  const userDetails = () => {
    dispatch(login({ email, password }, toastMsg))
    setEmail("");
    setPassword("");
  };

  const handleGoogleSignin = () => {
    dispatch(googleAuth(toastMsg))
  }

  return (
    <div>
      <div onClick={onOpen} className={style.loginButton}>
        Login
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 className={style.loginHead}>LOGIN</h1>
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
              <h3 className={style.loginHeadBase}>PASSWORD</h3>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  value={password}
                  placeholder="Enter Password"
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
                  onClick={userDetails}
                  isLoading={loading}
                  loadingText="Logging in"
                >Login</Button>
              </div>
            </form>
            <div>
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Button
                  style={{ borderRadius: "100px", padding: "1.5rem" }}
                  onClick={handleGoogleSignin}
                  isLoading={loading}
                  loadingText="Logging in"
                >
                  <Icon as={FcGoogle} boxSize={6} />
                  <h3 style={{ paddingLeft: "0.5rem" }}>LOGIN WITH GOOGLE</h3>
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

export default Login;
