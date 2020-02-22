import React, { ReactElement, ReactNode } from "react";
interface MenuProps {
    onClick: () => void;
    renderButton: () => ReactElement;
    isVisible: boolean;
    children: ReactNode | ReactNode[];
}
export declare const Menu: ({ children, renderButton, isVisible, onClick, }: MenuProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
