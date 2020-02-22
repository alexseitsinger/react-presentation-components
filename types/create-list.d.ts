import { ComponentClass, ElementType, ReactElement, ReactNode } from "react";
import { CSSObject } from "@emotion/core";
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
export declare function createList(List: ElementType, ListItem: ElementType): ComponentClass<CreatedListProps>;
