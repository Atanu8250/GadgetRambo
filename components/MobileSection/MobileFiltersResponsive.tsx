import React from "react";
import { Show } from "@chakra-ui/react";
import MobileFilters from "./MobileFilters";

type Props = {};

const MobileFiltersResponsive = (props: Props) => {
  return (
    <>
      <Show above="md">
        <MobileFilters />
      </Show>
      <Show below="md"></Show>
    </>
  );
};

export default MobileFiltersResponsive;
