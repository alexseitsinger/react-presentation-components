import React, { ReactElement, ReactNode } from "react"

import {
  CenterContainer,
  CenterContainerInner,
  CenterContainerOuter,
} from "./elements"

interface CenterProps {
  children: ReactNode | ReactNode[];
}

export const Center = ({ children }: CenterProps): ReactElement => (
  <CenterContainer>
    <CenterContainerOuter>
      <CenterContainerInner>{children}</CenterContainerInner>
    </CenterContainerOuter>
  </CenterContainer>
)
