import React, { ReactElement, ReactNode } from "react"
import PropTypes from "prop-types"

import { Column } from "src/column"
import { HorizontallyCenter } from "src/horizontally-center"

interface CenteredColumnProps {
  children: ReactNode | ReactNode[];
  isMaximized?: boolean;
}

export const CenteredColumn = ({
  children,
  isMaximized,
}: CenteredColumnProps): ReactElement => (
  <Column isMaximized={isMaximized}>
    <HorizontallyCenter>{children}</HorizontallyCenter>
  </Column>
)

CenteredColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}
