import React, { useEffect, useRef } from "react";
import style from "../../styles/Checkout.module.css";
import RightSidebar from "@/components/RightSidebar";
import {
  Button,
  Input,
  Textarea,
  PinInput,
  PinInputField,
  RadioGroup,
  Radio,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { RiVisaFill } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import Link from "next/link";
import useToastMsg from "@/customHook/UseToastMsg";
import Router from "next/router";
import { auth } from "@/Backend/Firebase/firebase";


const Checkout = () => {

  const toastmsg = useToastMsg();
  const [value, setValue] = React.useState("1");
  const [firstName, setFirstName] = React.useState("")
  const [address, setAddress] = React.useState("");

  useEffect(() => {
    if (auth.currentUser === null) {
      Router.replace("/");
      toastmsg({
        title: "Please Login first",
        status: "warning"
      })
    }
  }, [])

  const handlePayment = () => {

    if (firstName === "" || address === "") {
      toastmsg({
        title: "Please fill all the required fields!",
        status: "warning",
      });
    } else {
      toastmsg({
        title: "Payment Success",
        status: "success",
      });
      Router.replace("/");
    }
  };

  return (
    <div className={style.main}>
      <div className={style.mainSkeleton}>
        <div>
          <div className={style.shippingMain}>
            <h1 className={style.shippingHead}>SHIPPING INFORMATION</h1>
            <div className={style.shipping}>
              <div style={{ display: "flex", gap: "3rem" }}>
                <div>
                  <h1>First Name</h1>
                  <Input placeholder="First Name" value={firstName} onChange={(e) => {
                    setFirstName(e.currentTarget.value)
                  }} />
                </div>
                <div>
                  <h1>Second Name</h1>
                  <Input placeholder="Second Name" />
                </div>
              </div>
              <div>
                <h1>Email</h1>
                <Input placeholder="Email" />
              </div>
              <div>
                <h1>Phone Number</h1>
                <Input placeholder="Phone Number" />
              </div>
              <div>
                <h1>Address</h1>
                <Textarea placeholder="Address" value={address} onChange={(e) => {
                  setAddress(e.currentTarget.value)
                }} />
              </div>
              <div style={{ display: "flex", gap: "3rem" }}>
                <div>
                  <h1>Zip Code</h1>
                  <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </div>
                <div>
                  <h1>City</h1>
                  <Input placeholder="City" />
                </div>
              </div>
            </div>
          </div>
          <div className={style.paymentTop}>
            <div className={style.paymentMain}>
              <h1 className={style.paymentHead}>PAYMENT INFORMATION</h1>
              <div className={style.payment}>
                <div>
                  <h1>Select Card</h1>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row" gap="2rem">
                      <Radio value="1">
                        <Icon as={RiVisaFill} boxSize={12} />
                      </Radio>
                      <Radio value="2">
                        <Icon as={FaCcMastercard} boxSize={12} />
                      </Radio>
                      <Radio value="3">
                        <Icon as={SiAmericanexpress} boxSize={12} />
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </div>
                <div>
                  <h1>Card Number</h1>
                  <Input placeholder="0000 0000 0000 0000" />
                </div>
                <div>
                  <h1>Cardholder Name</h1>
                  <Input placeholder="Name" />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ width: "20%" }}>
                      <h1>Month</h1>
                      <Input placeholder="12" />
                    </div>
                    <div style={{ width: "20%" }}>
                      <h1>Year</h1>
                      <Input placeholder="2023" />
                    </div>
                  </div>
                  <div style={{ width: "40%" }}>
                    <h1>CVV</h1>
                    <PinInput type='alphanumeric' mask>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.button}>
              <div
                style={{ display: "flex", justifyContent: "end", gap: "1rem" }}
              >
                <Button onClick={handlePayment} bgColor={"#eae8e8"}>
                  Proceed To Pay
                </Button>
                <Link href="./cart">
                  <Button bgColor={"#eae8e8"}>Cancel</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Checkout;
