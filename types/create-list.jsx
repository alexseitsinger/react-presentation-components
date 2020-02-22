import React, { Children, Component, } from "react";
import { uniqueId } from "underscore";
import { isNullish } from "src/utils";
export function createList(List, ListItem) {
    return class CreatedList extends Component {
        constructor() {
            super(...arguments);
            this.renderChildren = () => {
                const { children, renderEach } = this.props;
                return Children.map(children, child => {
                    if (renderEach !== undefined) {
                        return this.renderListItem(renderEach(child));
                    }
                    return this.renderListItem(child);
                });
            };
            this.renderItems = () => {
                const { items, renderEach } = this.props;
                if (renderEach !== undefined && items !== undefined) {
                    return items.map(obj => this.renderListItem(renderEach(obj)));
                }
                return null;
            };
            this.renderFirst = () => {
                const { renderFirst } = this.props;
                if (renderFirst !== undefined) {
                    return this.renderListItem(renderFirst());
                }
                return null;
            };
            this.renderLast = () => {
                const { renderLast } = this.props;
                if (renderLast !== undefined) {
                    return this.renderListItem(renderLast());
                }
                return null;
            };
            this.renderListItem = (node) => {
                const { spacing, itemStyle } = this.props;
                const key = `flexListItem-${uniqueId()}`;
                if (isNullish(node)) {
                    return null;
                }
                return (<ListItem key={key} spacing={spacing} css={itemStyle}>
          {node}
        </ListItem>);
            };
            this.renderListItems = () => {
                const { children, items, renderNone } = this.props;
                if (React.Children.toArray(children).length > 0) {
                    return this.renderChildren();
                }
                if (items !== undefined && items.length > 0) {
                    return this.renderItems();
                }
                if (renderNone !== undefined) {
                    return [this.renderListItem(renderNone())];
                }
                return null;
            };
        }
        render() {
            const { listStyle, isMaximized } = this.props;
            const rendered = [
                this.renderFirst(),
                this.renderListItems(),
                this.renderLast(),
            ];
            const isEmpty = rendered.every(isNullish) || rendered.length === 0;
            if (isEmpty) {
                return null;
            }
            let finalListStyle = Object.assign({}, listStyle);
            if (isMaximized !== undefined && isMaximized === true) {
                finalListStyle = Object.assign(Object.assign({}, finalListStyle), { height: "100%" });
            }
            return <List css={finalListStyle}>{rendered}</List>;
        }
    };
}
//# sourceMappingURL=create-list.jsx.map