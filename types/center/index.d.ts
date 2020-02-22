import React, { ReactNode } from "react";
interface CenterProps {
    children: ReactNode | ReactNode[];
}
export declare const Center: ({ children }: CenterProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
