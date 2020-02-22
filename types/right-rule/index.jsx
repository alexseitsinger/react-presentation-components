import React from "react";
import { Column } from "src/column";
import { Row } from "src/row";
import { VerticallyCenter } from "src/vertically-center";
export const RightRule = ({ children, innerStyle, outerStyle, ruleColor, ruleSize, }) => (<Row css={outerStyle} direction={"row"}>
    <Column css={innerStyle}>{children}</Column>
    <Column isMaximized={true}>
      <VerticallyCenter>
        <div css={{
    height: ruleSize,
    backgroundColor: ruleColor,
    width: "100%",
}}/>
      </VerticallyCenter>
    </Column>
  </Row>);
//# sourceMappingURL=index.jsx.map