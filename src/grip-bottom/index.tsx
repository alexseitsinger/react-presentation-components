import React, { ReactElement, ReactNode } from "react"
// @ts-ignore
import stylePropType from "react-style-proptype"
import PropTypes from "prop-types"
import { CSSObject } from "@emotion/core"

import { GripBottomContainer } from "./elements"

interface Props {
  children: ReactNode | ReactNode[];
  containerStyle: CSSObject;
  isMaximized: boolean;
}

export const GripBottom = ({
  children,
  containerStyle,
  isMaximized,
}: Props): ReactElement => (
  <GripBottomContainer css={containerStyle} isMaximized={isMaximized}>
    {children}
  </GripBottomContainer>
)

GripBottom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerStyle: stylePropType,
  isMaximized: PropTypes.bool,
}

GripBottom.defaultProps = {
  isMaximized: false,
  containerStyle: {},
}
