import React, { ReactNode } from "react";
import { CSSObject } from "@emotion/core";
interface InitialProps {
    children: ReactNode | ReactNode[];
    isCentered?: boolean;
    containerStyle?: CSSObject;
    bodyStyle?: CSSObject;
    size: string;
}
declare const defaultProps: {
    isCentered: boolean;
    size: string;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
declare type Props = InitialProps & DefaultProps;
export declare const Box: {
    ({ bodyStyle, children, containerStyle, isCentered, size, }: Props): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    defaultProps: {
        isCentered: boolean;
        size: string;
    };
};
export {};
