import React, { ReactElement, ReactNode } from "react"
import PropTypes from "prop-types"

import { VerticalList } from "src/vertical-list"

import { MenuButton, MenuContainer } from "./elements"

export interface MenuProps {
  onClick: () => void;
  renderButton: () => ReactElement;
  isVisible: boolean;
  children: ReactNode | ReactNode[];
}

export const Menu = ({
  children,
  renderButton,
  isVisible,
  onClick,
}: MenuProps): ReactElement => {
  return (
    <MenuContainer>
      <MenuButton onClick={onClick} type={"button"}>
        {renderButton()}
      </MenuButton>
      {isVisible ? <VerticalList>{children}</VerticalList> : null}
    </MenuContainer>
  )
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
  renderButton: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  isVisible: PropTypes.bool.isRequired,
}
