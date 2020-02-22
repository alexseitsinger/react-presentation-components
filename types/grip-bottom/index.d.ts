import React, { ReactNode } from "react";
import { CSSObject } from "@emotion/core";
interface InitialProps {
    children: ReactNode | ReactNode[];
    containerStyle?: CSSObject;
    isMaximized?: boolean;
}
declare const defaultProps: {
    isMaximized: boolean;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
declare type Props = InitialProps & DefaultProps;
export declare const GripBottom: {
    ({ children, containerStyle, isMaximized, }: Props): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    defaultProps: {
        isMaximized: boolean;
    };
};
export {};
