import { css } from "@emotion/core"
import styled from "@emotion/styled"

interface Props {
  minHeight?: string;
  maxWidth?: string;
}

export const WrapperElement = styled.div`
  width: 100%;
  margin: 0 auto;
  ${({ maxWidth, minHeight }: Props): any => {
    const height = minHeight !== undefined ? minHeight : "auto"
    const width = maxWidth !== undefined ? maxWidth : "1200px"
    return css`
      max-width: ${width};
      min-height: ${height};
    `
  }}}
`
