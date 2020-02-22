import React, { ReactElement, ReactNode } from "react"
import { CSSObject } from "@emotion/core"

import { WrapperContainer } from "./elements"

interface WrapperProps {
  containerStyle?: CSSObject;
  children: ReactNode | ReactNode[];
  minHeight?: string;
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
