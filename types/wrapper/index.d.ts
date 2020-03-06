import React, { ReactNode } from "react";
import { CSSObject } from "@emotion/core";
interface Props {
    children: ReactNode | ReactNode[];
    containerStyle?: CSSObject;
    minHeight?: string;
    maxWidth?: string;
}
export declare const Wrapper: ({ children, containerStyle, minHeight, maxWidth, }: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
