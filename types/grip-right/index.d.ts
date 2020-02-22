import React, { ReactNode } from "react";
interface Props {
    children: ReactNode | ReactNode[];
    topPosition?: string;
    bottomPosition?: string;
    isMaximized?: boolean;
}
export declare const GripRight: ({ bottomPosition, children, isMaximized, topPosition, }: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
