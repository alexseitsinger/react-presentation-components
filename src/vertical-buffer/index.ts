import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { isString } from "underscore"

interface VerticalBufferProps {
  size: string;
}

export const VerticalBuffer = styled.div`
  display: block;
  width: 100%;
  background-color: transparent;
  color: transparent;
  font-size: 1rem;
  ${({ size }: VerticalBufferProps): any => {
    if (isString(size)) {
      return css`
        height: ${size};
      `
    }
  }}
`
