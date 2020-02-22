import React from "react";
import { BoxContainer, BoxContainerInner } from "./elements";
const defaultProps = {
    isCentered: false,
    size: "100%",
};
export const Box = ({ bodyStyle, children, containerStyle, isCentered, size, }) => (<BoxContainer css={containerStyle} size={size}>
    <BoxContainerInner isCentered={isCentered} css={bodyStyle}>
      {children}
    </BoxContainerInner>
  </BoxContainer>);
Box.defaultProps = defaultProps;
//# sourceMappingURL=index.jsx.map