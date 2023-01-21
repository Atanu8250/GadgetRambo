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

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [details, setDetails] = React.useState<object>({
    USERNAME: "",
    PASSWORD: "",
  });
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setUserName(e.target.value);
  };
  const userDetails = () => {
    setDetails({
      USERNAME: userName,
      PASSWORD: password,
    });
  };
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
              <h3 className={style.loginHeadBase}>USERNAME</h3>
              <InputGroup>
                <Input
                  type="tel"
                  value={userName}
                  placeholder="Enter Username"
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
              <div style={{textAlign:"center"}}>
                <Button colorScheme="red" onClick={userDetails}>Login</Button>
              </div>
            </form>
            <div>
              <div style={{textAlign:"center",marginTop:"2rem"}}>
                <Button style={{borderRadius:"100px",padding:"1.5rem"}}><Icon as={FcGoogle} boxSize={6} /><h3 style={{paddingLeft:"0.5rem"}}>LOGIN WITH GOOGLE</h3></Button>
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
