import React, { ReactElement, ReactNode } from "react"
import PropTypes from "prop-types"

import { VerticalAlignContainer } from "./elements"

export interface VerticalAlignProps {
  children: ReactNode | ReactNode[];
}

export const VerticalAlign = ({
  children,
}: VerticalAlignProps): ReactElement => (
  <VerticalAlignContainer>{children}</VerticalAlignContainer>
)

VerticalAlign.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}
