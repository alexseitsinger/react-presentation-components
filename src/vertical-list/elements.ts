import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const List = styled.ul`
  flex: 1 1 auto;
`

export interface ListItemProps {
  spacing?: string;
}

export const ListItem = styled.li`
  ${({ spacing }: ListItemProps): any => {
    if (spacing !== undefined) {
      return css`
        margin-bottom: ${spacing};
      `
    }
  }}
  &:last-of-type {
    margin-bottom: 0;
  }
`
