import React from "react";
import { GripBottomContainer } from "./elements";
const defaultProps = {
    isMaximized: false,
};
export const GripBottom = ({ children, containerStyle, isMaximized, }) => (<GripBottomContainer css={containerStyle} isMaximized={isMaximized}>
    {children}
  </GripBottomContainer>);
GripBottom.defaultProps = defaultProps;
//# sourceMappingURL=index.jsx.map