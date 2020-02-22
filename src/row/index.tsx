import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { isString } from "underscore"

interface RowProps {
  direction?: string;
  isMaximized?: boolean;
  spacing?: string;
  ends?: boolean;
}

export const Row = styled.div`
  width: 100%;
  ${({ direction, isMaximized, spacing, ends }: RowProps): any => {
    let lines: string[] = []

    if (isString(direction)) {
      lines = [...lines, `display: flex; flex-direction: ${direction};`]
    }
    if (isMaximized !== undefined && isMaximized) {
      lines = [...lines, `height: 100%; flex: 1 1 auto;`]
    }
    if (isString(spacing)) {
      lines = [...lines, `justify-content: ${spacing};`]
    }
    if (ends !== undefined && ends) {
      lines = [...lines, `justify-content: space-between;`]
    }

    return css`
      ${lines.join("")}
    `
  }}
`
