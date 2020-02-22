import { css } from "@emotion/core"
import styled from "@emotion/styled"

interface GripBottomContainerProps {
  isMaximized: boolean;
}

export const GripBottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  ${({ isMaximized }: GripBottomContainerProps): any => {
    if (isMaximized) {
      return css`
        left: 0;
        width: 100%;
      `
    }
  }}
`
