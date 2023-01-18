import React, { useRef } from "react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, IconButton } from "@chakra-ui/react";

type Props = {};

const BasicDrawer = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  return <></>;
};

export default BasicDrawer;
