import React, { ReactElement, ReactNode } from "react"

import { GripRightContainer } from "./elements"

interface Props {
  children: ReactNode | ReactNode[];
  topPosition?: string;
  bottomPosition?: string;
  isMaximized?: boolean;
}

export const GripRight = ({
  bottomPosition,
  children,
  isMaximized,
  topPosition,
}: Props): ReactElement => (
  <GripRightContainer
    topPosition={topPosition}
    bottomPosition={bottomPosition}
    isMaximized={isMaximized}>
    {children}
  </GripRightContainer>
)
