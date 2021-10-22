import React from "react";
import { Option, Select } from "./select.style";

const CustomSelect = () => {
  return (
    <Select>
      <Option value="1">All Owners</Option>
      <Option value="2">Owned by me</Option>
      <Option value="3">Followed Candidates</Option>
    </Select>
  );
};

export default CustomSelect;
