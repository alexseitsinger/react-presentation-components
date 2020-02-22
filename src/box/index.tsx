import React, { ReactElement, ReactNode } from "react"
// @ts-ignore
import stylePropType from "react-style-proptype"
import PropTypes from "prop-types"
import { CSSObject } from "@emotion/core"

import { BoxContainer, BoxContainerInner } from "./elements"

interface BoxProps {
  children: ReactNode | ReactNode[];
  isCentered: boolean;
  containerStyle: CSSObject;
  bodyStyle: CSSObject;
  size: string;
}

export const Box = ({
  bodyStyle,
  children,
  containerStyle,
  isCentered,
  size,
}: BoxProps): ReactElement => (
  <BoxContainer css={containerStyle} size={size}>
    <BoxContainerInner isCentered={isCentered} css={bodyStyle}>
      {children}
    </BoxContainerInner>
  </BoxContainer>
)

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  containerStyle: stylePropType,
  bodyStyle: stylePropType,
  isCentered: PropTypes.bool,
  size: PropTypes.string,
}

Box.defaultProps = {
  containerStyle: {},
  bodyStyle: {},
  isCentered: false,
  size: "100%",
}
