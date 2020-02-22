import { css } from "@emotion/core";
import styled from "@emotion/styled";
export const GripBottomContainer = styled.div `
  position: absolute;
  bottom: 0;
  ${({ isMaximized }) => {
    if (isMaximized) {
        return css `
        left: 0;
        width: 100%;
      `;
    }
}}
`;
//# sourceMappingURL=elements.js.map