import React from "react";
import { CenterContainer, CenterContainerInner, CenterContainerOuter, } from "./elements";
export const Center = ({ children }) => (<CenterContainer>
    <CenterContainerOuter>
      <CenterContainerInner>{children}</CenterContainerInner>
    </CenterContainerOuter>
  </CenterContainer>);
//# sourceMappingURL=index.jsx.map