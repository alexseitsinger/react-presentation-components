import React, { ReactElement, ReactNode } from "react"
import PropTypes from "prop-types"

import { HorizontallyCenter } from "src/horizontally-center"
import { Row } from "src/row"

interface CenteredRowProps {
  children: ReactNode | ReactNode[];
  isMaximized?: boolean;
}

export const CenteredRow = ({
  children,
  isMaximized,
}: CenteredRowProps): ReactElement => (
  <Row isMaximized={isMaximized}>
    <HorizontallyCenter>{children}</HorizontallyCenter>
  </Row>
)

CenteredRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

CenteredRow.defaultProps = {}
