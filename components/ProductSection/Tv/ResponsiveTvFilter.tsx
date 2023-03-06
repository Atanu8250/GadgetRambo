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
import TvFilter from "./TvFilter";

type Props = {};

const ResponsiveTvFilter = ({ setTv }: any) => {
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
            <TvFilter setTv={setTv} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );
};

export default ResponsiveTvFilter;
