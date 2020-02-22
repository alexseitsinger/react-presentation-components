import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { isString } from "underscore";
export const HorizontalRule = styled.hr `
  ${({ size, color, inset }) => {
    let lines = [];
    if (isString(size)) {
        lines = [...lines, `height: ${size};`];
    }
    if (isString(color)) {
        lines = [...lines, `background-color: ${color};`];
    }
    if (inset !== undefined && inset) {
        lines = [...lines, `box-shadow: 0 1px 0 #FFFFFF;`];
    }
    return css `
      ${lines.join("")}
    `;
}}
`;
//# sourceMappingURL=index.jsx.map