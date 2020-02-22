import styled from "@emotion/styled"

export const CenterContainer = styled.div`
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
`

export const CenterContainerOuter = styled.div`
  height: 100%;
  text-align: center;
  &:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
  }
`

export const CenterContainerInner = styled("div")`
  display: inline-block;
  text-align: initial;
  vertical-align: middle;
`
