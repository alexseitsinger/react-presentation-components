import React, { ReactElement, ReactNode } from "react"
import PropTypes from "prop-types"

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

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
