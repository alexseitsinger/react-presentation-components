import { css } from "@emotion/core";
import styled from "@emotion/styled";
export const List = styled.ul ``;
export const ListItem = styled.li `
  display: inline-block;
  vertical-align: top;
  ${({ spacing }) => {
    if (spacing !== undefined) {
        return css `
        padding-left: ${spacing};
        padding-top: ${spacing};
      `;
    }
}}
  &:first-of-type {
    padding-left: 0;
    padding-top;
  }
`;
//# sourceMappingURL=elements.js.map