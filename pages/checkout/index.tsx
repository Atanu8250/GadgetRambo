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
import { addOrderAPI } from "@/redux/orders/orders.api";
import { getCart } from "@/redux/cart/cart.actions";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const toastmsg = useToastMsg();
  const [value, setValue] = React.useState("1");
  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [city, setCity] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.currentUser === null) {
      Router.replace("/");
      toastmsg({
        title: "Please Login first",
        status: "warning",
      });
    }
  }, []);

  const handlePayment = async () => {
    if (
      firstName === "" ||
      address === "" ||
      secondName === "" ||
      email === "" ||
      mobile === "" ||
      city === "" ||
      cardName === "" ||
      cardNumber === "" ||
      zip.length !== 6 ||
      cvv.length !== 3
    ) {
      toastmsg({
        title: "Please fill all the required fields!",
        status: "warning",
      });
    } else {
      await addOrderAPI(toastmsg);
      getCart(dispatch);
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
              <div className={style.name}>
                <div>
                  <h1>First Name</h1>
                  <Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.currentTarget.value);
                    }}
                  />
                </div>
                <div>
                  <h1>Second Name</h1>
                  <Input
                    placeholder="Second Name"
                    value={secondName}
                    onChange={(e) => {
                      setSecondName(e.currentTarget.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <h1>Email</h1>
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                />
              </div>
              <div>
                <h1>Phone Number</h1>
                <Input
                  placeholder="Phone Number"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.currentTarget.value);
                  }}
                />
              </div>
              <div>
                <h1>Address</h1>
                <Textarea
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.currentTarget.value);
                  }}
                />
              </div>
              <div className={style.lowerAdd}>
                <div className={style.city}>
                  <h1>City</h1>
                  <Input
                    placeholder="City"
                    value={city}
                    onChange={(e) => {
                      setCity(e.currentTarget.value);
                    }}
                  />
                </div>
                <div>
                  <h1>Zip Code</h1>
                  <PinInput
                    onChange={(e) => {
                      setZip(e);
                    }}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
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
                    <div className={style.card}>
                      {/* <Stack direction={['column', 'row']} gap="2rem"> */}
                      <Radio value="1">
                        <Icon as={RiVisaFill} boxSize={12} />
                      </Radio>
                      <Radio value="2">
                        <Icon as={FaCcMastercard} boxSize={12} />
                      </Radio>
                      <Radio value="3">
                        <Icon as={SiAmericanexpress} boxSize={12} />
                      </Radio>
                      {/* </Stack> */}
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <h1>Card Number</h1>
                  <Input
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => {
                      setCardNumber(e.currentTarget.value);
                    }}
                  />
                </div>
                <div>
                  <h1>Cardholder Name</h1>
                  <Input
                    placeholder="Name"
                    value={cardName}
                    onChange={(e) => {
                      setCardName(e.currentTarget.value);
                    }}
                  />
                </div>
                <div className={style.lowerPayment}>
                  <div className={style.date}>
                    <div className={style.month}>
                      <h1>Month</h1>
                      <Input placeholder="12" />
                    </div>
                    <div className={style.year}>
                      <h1>Year</h1>
                      <Input placeholder="2023" />
                    </div>
                  </div>
                  <div className={style.cvv}>
                    <h1>CVV</h1>
                    <PinInput
                      type="alphanumeric"
                      mask
                      onChange={(e) => {
                        setCvv(e);
                      }}
                    >
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
