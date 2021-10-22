import React from "react";
import CustomTabButton from "../../common/tabbuttons";

const Tabs = ({ children, width, active, onClick }) => {
  return (
    <React.Fragment>
      <CustomTabButton onClick={onClick} width={width} active={active}>
        {children}
      </CustomTabButton>
    </React.Fragment>
  );
};

export default Tabs;
