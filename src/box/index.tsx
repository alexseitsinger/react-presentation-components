import React, { ReactElement, ReactNode } from "react"
import { CSSObject } from "@emotion/core"

import { BoxContainer, BoxContainerInner } from "./elements"

interface InitialProps {
  children: ReactNode | ReactNode[];
  isCentered?: boolean;
  containerStyle?: CSSObject;
  bodyStyle?: CSSObject;
  size: string;
}

const defaultProps = {
  isCentered: false,
  size: "100%",
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = InitialProps & DefaultProps

export const Box = ({
  bodyStyle,
  children,
  containerStyle,
  isCentered,
  size,
}: Props): ReactElement => (
  <BoxContainer css={containerStyle} size={size}>
    <BoxContainerInner isCentered={isCentered} css={bodyStyle}>
      {children}
    </BoxContainerInner>
  </BoxContainer>
)

Box.defaultProps = defaultProps
