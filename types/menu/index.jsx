import React from "react";
import { VerticalList } from "src/vertical-list";
import { MenuButton, MenuContainer } from "./elements";
export const Menu = ({ children, renderButton, isVisible, onClick, }) => {
    return (<MenuContainer>
      <MenuButton onClick={onClick} type={"button"}>
        {renderButton()}
      </MenuButton>
      {isVisible ? <VerticalList>{children}</VerticalList> : null}
    </MenuContainer>);
};
//# sourceMappingURL=index.jsx.map