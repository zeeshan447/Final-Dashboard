import React from "react";
import { FeatherIcons, Wrapper } from "./feathericon.style";

const FeatherIconsReact = ({ icon, style }) => {
  return (
    <Wrapper>
      {icon && <FeatherIcons style={style}>{icon}</FeatherIcons>}
    </Wrapper>
  );
};

export default FeatherIconsReact;
