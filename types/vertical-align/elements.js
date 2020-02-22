import styled from "@emotion/styled";
export const VerticalAlignContainer = styled.div `
  height: 100%;
  vertical-align: middle;
  &::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  & > * {
    display: inline-block;
    vertical-align: middle !important;
  }
`;
//# sourceMappingURL=elements.js.map