import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { isString } from "underscore";
export const HorizontalDividerContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ containerSpacing }) => {
    if (isString(containerSpacing)) {
        return css `
        margin: ${containerSpacing} auto;
      `;
    }
}}
`;
export const HorizontalDividerSide = styled.div `
  flex: 1 1 auto;
  ${({ lineSize, lineColor }) => {
    let lines = [];
    if (isString(lineSize)) {
        lines = [...lines, `height: ${lineSize};`];
    }
    if (isString(lineColor)) {
        lines = [...lines, `background-color: ${lineColor};`];
    }
    return css `
      ${lines.join("")}
    `;
}}
`;
export const HorizontalDividerText = styled.div `
  ${({ textSpacing, textColor }) => {
    let lines = [];
    if (isString(textSpacing)) {
        lines = [
            ...lines,
            `margin-left: ${textSpacing};`,
            `margin-right: ${textSpacing}`,
        ];
    }
    if (isString(textColor)) {
        lines = [...lines, `color: ${textColor};`];
    }
    return css `
      ${lines.join("")}
    `;
}}
`;
//# sourceMappingURL=elements.js.map