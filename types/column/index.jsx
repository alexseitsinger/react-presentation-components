import { css } from "@emotion/core";
import styled from "@emotion/styled";
export const Column = styled.div `
  ${({ isMaximized, isVerticallyCentered, direction }) => {
    let lines = [];
    if (isMaximized !== undefined && isMaximized) {
        lines = [...lines, `flex: 1 1 auto;`];
    }
    if (isVerticallyCentered !== undefined && isVerticallyCentered) {
        lines = [...lines, `display: flex;`, `align-items: center;`];
    }
    if (direction !== undefined) {
        lines = [...lines, `display: flex;`, `flex-direction: ${direction};`];
    }
    return css `
      ${lines.join("")}
    `;
}}
`;
//# sourceMappingURL=index.jsx.map