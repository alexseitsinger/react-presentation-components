import React, { ReactElement, ReactNode } from "react"
import { CSSObject } from "@emotion/core"

import { WrapperElement } from "./elements"

interface Props {
  children: ReactNode | ReactNode[];
  containerStyle?: CSSObject;
  minHeight?: string;
  maxWidth?: string;
}

export const Wrapper = ({
  children,
  containerStyle,
  minHeight,
  maxWidth,
}: Props): ReactElement => (
  <WrapperElement
    css={containerStyle}
    minHeight={minHeight}
    maxWidth={maxWidth}>
    {children}
  </WrapperElement>
)
