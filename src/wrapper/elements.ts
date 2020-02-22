import { css } from "@emotion/core"
import styled from "@emotion/styled"

interface WrapperContainerProps {
  minHeight?: string;
}

export const WrapperContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  ${({ minHeight }: WrapperContainerProps): any => {
    if (minHeight !== undefined) {
      return css`
        min-height: ${minHeight};
      `
    }
  }}
`
