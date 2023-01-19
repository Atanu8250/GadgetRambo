import React, { useRef } from "react";
import { Drawer, DrawerBody, Show, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, IconButton } from "@chakra-ui/react";
import ProductFilter from "./ProductFilter";
import { BiFilterAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { State } from "@/redux/store";

type Props = {};

const SmallScreenFilter = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  return (
    <Show below="md">
      <IconButton ref={btnRef} colorScheme="red" onClick={onOpen} icon={<BiFilterAlt />} aria-label={"Blank Drwawer"} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <ProductFilter />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );
};

export default SmallScreenFilter;
