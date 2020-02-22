import { css } from "@emotion/core";
import styled from "@emotion/styled";
export const List = styled.ul `
  flex: 1 1 auto;
`;
export const ListItem = styled.li `
  ${({ spacing }) => {
    if (spacing !== undefined) {
        return css `
        margin-bottom: ${spacing};
      `;
    }
}}
  &:last-of-type {
    margin-bottom: 0;
  }
`;
//# sourceMappingURL=elements.js.map