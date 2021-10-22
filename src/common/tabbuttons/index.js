import React from "react";
import { TabButtonDiv, TabButtons } from "./tabbuttons.style";

const CustomTabButton = ({ children, width, active, onClick }) => {
  return (
    <TabButtonDiv>
      <TabButtons width={width} active={active} onClick={onClick}>
        {children}
      </TabButtons>
    </TabButtonDiv>
  );
};

export default CustomTabButton;
