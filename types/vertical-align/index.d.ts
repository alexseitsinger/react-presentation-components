import React, { ReactNode } from "react";
interface VerticalAlignProps {
    children: ReactNode | ReactNode[];
}
export declare const VerticalAlign: ({ children, }: VerticalAlignProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
