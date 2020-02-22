import React, {
  Children,
  Component,
  ComponentClass,
  ElementType,
  ReactElement,
  ReactNode,
} from "react"
import { CSSObject } from "@emotion/core"
import { uniqueId } from "underscore"

import { isNullish } from "src/utils"

export interface CreatedListProps {
  children: ReactNode | ReactNode[];
  spacing?: string;
  renderEach?: (child: ReactNode | object) => ReactElement;
  renderFirst?: () => ReactElement;
  renderLast?: () => ReactElement;
  renderNone?: () => ReactElement;
  listStyle?: CSSObject;
  itemStyle?: CSSObject;
  items?: object[];
  isMaximized?: boolean;
}

export function createList(
  List: ElementType,
  ListItem: ElementType
): ComponentClass<CreatedListProps> {
  return class CreatedList extends Component<CreatedListProps> {
    renderChildren = (): ReactNode | ReactNode[] => {
      const { children, renderEach } = this.props

      return Children.map(children, child => {
        if (renderEach !== undefined) {
          return this.renderListItem(renderEach(child))
        }
        return this.renderListItem(child)
      })
    }

    renderItems = (): ReactNode => {
      const { items, renderEach } = this.props

      if (renderEach !== undefined && items !== undefined) {
        return items.map(obj => this.renderListItem(renderEach(obj)))
      }
      return null
    }

    renderFirst = (): ReactNode => {
      const { renderFirst } = this.props

      if (renderFirst !== undefined) {
        return this.renderListItem(renderFirst())
      }

      return null
    }

    renderLast = (): ReactNode => {
      const { renderLast } = this.props

      if (renderLast !== undefined) {
        return this.renderListItem(renderLast())
      }

      return null
    }

    renderListItem = (node: ReactNode): ReactNode => {
      const { spacing, itemStyle } = this.props
      const key = `flexListItem-${uniqueId()}`

      if (isNullish(node)) {
        return null
      }

      return (
        <ListItem key={key} spacing={spacing} css={itemStyle}>
          {node}
        </ListItem>
      )
    }

    renderListItems = (): ReactNode | ReactNode[] => {
      const { children, items, renderNone } = this.props
      if (React.Children.toArray(children).length > 0) {
        return this.renderChildren()
      }
      if (items !== undefined && items.length > 0) {
        return this.renderItems()
      }
      if (renderNone !== undefined) {
        return [this.renderListItem(renderNone())]
      }
      return null
    }

    render(): ReactNode {
      const { listStyle, isMaximized } = this.props

      const rendered = [
        this.renderFirst(),
        this.renderListItems(),
        this.renderLast(),
      ]

      const isEmpty = rendered.every(isNullish) || rendered.length === 0
      if (isEmpty) {
        return null
      }

      let finalListStyle = { ...listStyle }
      if (isMaximized !== undefined && isMaximized === true) {
        finalListStyle = {
          ...finalListStyle,
          height: "100%",
        }
      }

      return <List css={finalListStyle}>{rendered}</List>
    }
  }
}
