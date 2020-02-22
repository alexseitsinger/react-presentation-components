import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { CSSObject } from "@emotion/core";
interface WrapperProps {
    containerStyle?: CSSObject;
    children: ReactNode | ReactNode[];
    minHeight: string;
}
export declare const Wrapper: {
    ({ children, containerStyle, minHeight, }: WrapperProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        containerStyle: any;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        minHeight: PropTypes.Requireable<string>;
    };
    defaultProps: {
        containerStyle: {};
        minHeight: string;
    };
};
export {};
