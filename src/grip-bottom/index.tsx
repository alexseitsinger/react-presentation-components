import React, { ReactElement, ReactNode } from "react"
import { CSSObject } from "@emotion/core"

import { GripBottomContainer } from "./elements"

interface InitialProps {
  children: ReactNode | ReactNode[];
  containerStyle?: CSSObject;
  isMaximized?: boolean;
}

const defaultProps = {
  isMaximized: false,
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = InitialProps & DefaultProps

export const GripBottom = ({
  children,
  containerStyle,
  isMaximized,
}: Props): ReactElement => (
  <GripBottomContainer css={containerStyle} isMaximized={isMaximized}>
    {children}
  </GripBottomContainer>
)

GripBottom.defaultProps = defaultProps
