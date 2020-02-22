import React from "react";
interface HorizontalDividerProps {
    text: string;
    textColor?: string;
    textSpacing?: string;
    lineSize?: string;
    lineColor?: string;
    containerSpacing?: string;
}
export declare const HorizontalDivider: ({ containerSpacing, lineColor, lineSize, text, textColor, textSpacing, }: HorizontalDividerProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
