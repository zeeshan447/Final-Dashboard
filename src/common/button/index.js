import React from "react";
import { Button } from "./button.style";

const CustomButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CustomButton;
