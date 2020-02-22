import React, { ReactElement, ReactNode } from "react"
// @ts-ignore
import stylePropType from "react-style-proptype"
import PropTypes from "prop-types"
import { CSSObject } from "@emotion/core"

import { WrapperContainer } from "./elements"

interface WrapperProps {
  containerStyle?: CSSObject;
  children: ReactNode | ReactNode[];
  minHeight: string;
}

export const Wrapper = ({
  children,
  containerStyle,
  minHeight,
}: WrapperProps): ReactElement => (
  <WrapperContainer css={containerStyle} minHeight={minHeight}>
    {children}
  </WrapperContainer>
)

Wrapper.propTypes = {
  containerStyle: stylePropType,
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.string,
}

Wrapper.defaultProps = {
  containerStyle: {},
  minHeight: "0px",
}
