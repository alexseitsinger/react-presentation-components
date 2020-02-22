import React, { ReactElement, ReactNode } from "react"
import { CSSObject } from "@emotion/core"

import { Column } from "src/column"
import { Row } from "src/row"
import { VerticallyCenter } from "src/vertically-center"

interface RightRuleProps {
  outerStyle?: CSSObject;
  innerStyle?: CSSObject;
  children: ReactNode | ReactNode[];
  ruleColor: string;
  ruleSize: string;
}

export const RightRule = ({
  children,
  innerStyle,
  outerStyle,
  ruleColor,
  ruleSize,
}: RightRuleProps): ReactElement => (
  <Row css={outerStyle} direction={"row"}>
    <Column css={innerStyle}>{children}</Column>
    <Column isMaximized={true}>
      <VerticallyCenter>
        <div
          css={{
            height: ruleSize,
            backgroundColor: ruleColor,
            width: "100%",
          }}
        />
      </VerticallyCenter>
    </Column>
  </Row>
)
