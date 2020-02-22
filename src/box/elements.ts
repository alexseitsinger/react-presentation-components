import { css } from "@emotion/core"
import styled from "@emotion/styled"

interface BoxContainerProps {
  size?: string;
}

export const BoxContainer = styled.div`
  height: 0;
  position: relative;
  ${({ size }: BoxContainerProps): any => {
    if (size !== undefined) {
      return css`
        padding-top: ${size};
      `
    }
  }}
`

interface BoxContainerInnerProps {
  isCentered?: boolean;
}

export const BoxContainerInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  ${({ isCentered }: BoxContainerInnerProps): any => {
    if (isCentered !== undefined && isCentered) {
      return css`
        & > :first-of-type {
          justify-content: center;
          align-items: center;
        }
      `
    }
    return css`
      & > *:first-of-type {
        flex: 1 1 auto;
      }
    `
  }}
`
