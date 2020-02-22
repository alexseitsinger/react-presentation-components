import React, { ReactNode } from "react";
import { CSSObject } from "@emotion/core";
interface WrapperProps {
    containerStyle?: CSSObject;
    children: ReactNode | ReactNode[];
    minHeight?: string;
}
export declare const Wrapper: ({ children, containerStyle, minHeight, }: WrapperProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
