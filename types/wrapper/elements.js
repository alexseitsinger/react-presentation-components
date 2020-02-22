import { css } from "@emotion/core";
import styled from "@emotion/styled";
export const WrapperContainer = styled.div `
  width: 1200px;
  margin: 0 auto;
  ${({ minHeight }) => {
    if (minHeight !== undefined) {
        return css `
        min-height: ${minHeight};
      `;
    }
}}
`;
//# sourceMappingURL=elements.js.map