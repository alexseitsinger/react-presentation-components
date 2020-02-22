import React, {
  Children,
  Component,
  ComponentType,
  ElementType,
  ReactElement,
  ReactNode,
} from "react"
// @ts-ignore
import stylePropType from "react-style-proptype"
import PropTypes from "prop-types"
import { CSSObject } from "@emotion/core"
import { uniqueId } from "underscore"

import { isNullish } from "src/utils"

interface CreatedListProps {
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
): ComponentType {
  return class CreatedList extends Component<CreatedListProps> {
    static propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
      ]),
      spacing: PropTypes.string,
      renderEach: PropTypes.func,
      renderFirst: PropTypes.func,
      renderLast: PropTypes.func,
      renderNone: PropTypes.func,
      listStyle: stylePropType,
      itemStyle: stylePropType,
      items: PropTypes.arrayOf(PropTypes.node),
    }

    static defaultProps = {
      children: undefined,
      spacing: "0px",
      renderEach: undefined,
      renderFirst: undefined,
      renderLast: undefined,
      renderNone: undefined,
      listStyle: {},
      itemStyle: {},
      items: undefined,
    }

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

      if (node !== undefined) {
        return (
          <ListItem key={key} spacing={spacing} css={itemStyle}>
            {node}
          </ListItem>
        )
      }

      return null
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

      const finalListStyle = {
        ...listStyle,
        height: isMaximized !== undefined && isMaximized ? "100%" : "auto",
      }

      return <List css={finalListStyle}>{rendered}</List>
    }
  }
}
