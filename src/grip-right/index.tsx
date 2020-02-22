import React, { ReactElement, ReactNode } from "react"
import PropTypes from "prop-types"

import { GripRightContainer } from "./elements"

interface Props {
  children: ReactNode | ReactNode[];
  topPosition: string;
  bottomPosition: string;
  isMaximized: boolean;
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

GripRight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  topPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottomPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isMaximized: PropTypes.bool,
}

GripRight.defaultProps = {
  topPosition: "auto",
  bottomPosition: "auto",
  isMaximized: false,
}
