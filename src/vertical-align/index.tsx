import React, { ReactElement, ReactNode } from "react"

import { VerticalAlignContainer } from "./elements"

interface VerticalAlignProps {
  children: ReactNode | ReactNode[];
}

export const VerticalAlign = ({
  children,
}: VerticalAlignProps): ReactElement => (
  <VerticalAlignContainer>{children}</VerticalAlignContainer>
)
