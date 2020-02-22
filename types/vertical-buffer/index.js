import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { isString } from "underscore";
export const VerticalBuffer = styled.div `
  display: block;
  width: 100%;
  background-color: transparent;
  color: transparent;
  font-size: 1rem;
  ${({ size }) => {
    if (isString(size)) {
        return css `
        height: ${size};
      `;
    }
}}
`;
//# sourceMappingURL=index.js.map