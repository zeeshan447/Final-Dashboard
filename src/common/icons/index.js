import React from "react";
import { Icons, Wrapper } from "./icon.style";

const MaterialIcons = ({ icon, style }) => {
  return <Wrapper>{icon && <Icons style={style}>{icon}</Icons>}</Wrapper>;
};

export default MaterialIcons;
