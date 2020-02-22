import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { isString } from "underscore"

export const List = styled.ul`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-evenly;
  max-width: 100%;
`

export interface ListItemProps {
  spacing?: string;
}

export const ListItem = styled.li`
  display: flex;
  flex: 1 1 auto;
  ${({ spacing }: ListItemProps): any => {
    if (spacing !== undefined && isString(spacing)) {
      return css`
        padding-left: ${spacing};
      `
    }
  }}
  &:first-of-type {
    padding-left: 0;
  }
`
