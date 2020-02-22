import { css } from "@emotion/core";
import styled from "@emotion/styled";
export const GripRightContainer = styled.div `
  position: absolute;
  right: 0;
  ${({ topPosition, bottomPosition, isMaximized, }) => {
    let lines = [];
    if (topPosition !== undefined) {
        lines = [...lines, `top: ${topPosition};`];
    }
    if (bottomPosition !== undefined) {
        lines = [...lines, `bottom: ${bottomPosition};`];
    }
    if (isMaximized !== undefined && isMaximized) {
        lines = [...lines, `top: 0; height: 100%;`];
    }
    return css `
      ${lines.join("")}
    `;
}}
`;
//# sourceMappingURL=elements.js.map