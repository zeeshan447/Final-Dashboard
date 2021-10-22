import React from "react";
import Icon from "../../common/icons";
import { Input, InputIcon, InputSetUp } from "./input.style";

const CustomInput = ({ primary, width }) => {
  return (
    <React.Fragment>
      <InputSetUp>
        <InputIcon>
          <Icon style={{ color: "#9E9EA7" }} icon="search"></Icon>
        </InputIcon>
        <Input
          primary={primary}
          width={width}
          type="text"
          placeholder="Search"
        ></Input>
      </InputSetUp>
    </React.Fragment>
  );
};

export default CustomInput;
