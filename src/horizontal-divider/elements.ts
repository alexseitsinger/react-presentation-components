import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { isString } from "underscore"

interface HorizontalDividerContainerProps {
  containerSpacing?: string;
}

export const HorizontalDividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ containerSpacing }: HorizontalDividerContainerProps): any => {
    if (isString(containerSpacing)) {
      return css`
        margin: ${containerSpacing} auto;
      `
    }
  }}
`

interface HorizontalDividerSideProps {
  lineSize?: string;
  lineColor?: string;
}

export const HorizontalDividerSide = styled.div`
  flex: 1 1 auto;
  ${({ lineSize, lineColor }: HorizontalDividerSideProps): any => {
    let lines: string[] = []
    if (isString(lineSize)) {
      lines = [...lines, `height: ${lineSize};`]
    }
    if (isString(lineColor)) {
      lines = [...lines, `background-color: ${lineColor};`]
    }
    return css`
      ${lines.join("")}
    `
  }}
`

interface HorizontalDividerTextProps {
  textSpacing?: string;
  textColor?: string;
}

export const HorizontalDividerText = styled.div`
  ${({ textSpacing, textColor }: HorizontalDividerTextProps): any => {
    let lines: string[] = []
    if (isString(textSpacing)) {
      lines = [
        ...lines,
        `margin-left: ${textSpacing};`,
        `margin-right: ${textSpacing}`,
      ]
    }
    if (isString(textColor)) {
      lines = [...lines, `color: ${textColor};`]
    }

    return css`
      ${lines.join("")}
    `
  }}
`
