import { css } from "@emotion/core"
import styled from "@emotion/styled"

interface ColumnProps {
  isMaximized?: boolean;
  isVerticallyCentered?: boolean;
  direction?: string;
}

export const Column = styled.div`
  ${({ isMaximized, isVerticallyCentered, direction }: ColumnProps): any => {
    let lines: string[] = []

    if (isMaximized !== undefined && isMaximized) {
      lines = [...lines, `flex: 1 1 auto;`]
    }
    if (isVerticallyCentered !== undefined && isVerticallyCentered) {
      lines = [...lines, `display: flex;`, `align-items: center;`]
    }
    if (direction !== undefined) {
      lines = [...lines, `display: flex;`, `flex-direction: ${direction};`]
    }

    return css`
      ${lines.join("")}
    `
  }}
`
