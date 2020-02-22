import React, { ReactElement, ReactNode } from "react"

import { VerticalList } from "src/vertical-list"

import { MenuButton, MenuContainer } from "./elements"

interface MenuProps {
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
