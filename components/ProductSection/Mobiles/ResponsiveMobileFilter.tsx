import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  Show,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { BiFilterAlt } from "react-icons/bi";
import MobileFilter from "./MobileFilter";

type Props = {};

const ResponsiveMobileFilter = ({ setMobiles }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  return (
    <Show breakpoint="(max-width: 767px)">
      <Flex gap={3} alignItems={"center"}>
        <Heading size={"md"}>Filters</Heading>
        <IconButton
          ref={btnRef}
          colorScheme="red"
          onClick={onOpen}
          icon={<BiFilterAlt />}
          aria-label={"Blank Drwawer"}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <MobileFilter setMobiles={setMobiles} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );
};

export default ResponsiveMobileFilter;
