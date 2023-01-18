import React, { useState, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Show,
  Button,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/react";
import MobileFilters from "@/components/MobileSection/MobileFilters";

type Props = {};

const PreviewPage = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const [value, setValue] = useState<string>("1");
  const [range, setRange] = useState<number>(198000);
  console.log(range);
  return (
    <>
      <Show above="md">
        <MobileFilters />
      </Show>
      <Show below="md">
        <IconButton ref={btnRef} colorScheme="teal" onClick={onOpen} aria-label={"Blank Drwawer"} />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filters</DrawerHeader>

            <DrawerBody></DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
};

export default PreviewPage;
