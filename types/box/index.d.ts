import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { CSSObject } from "@emotion/core";
interface BoxProps {
    children: ReactNode | ReactNode[];
    isCentered: boolean;
    containerStyle: CSSObject;
    bodyStyle: CSSObject;
    size: string;
}
export declare const Box: {
    ({ bodyStyle, children, containerStyle, isCentered, size, }: BoxProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        containerStyle: any;
        bodyStyle: any;
        isCentered: PropTypes.Requireable<boolean>;
        size: PropTypes.Requireable<string>;
    };
    defaultProps: {
        containerStyle: {};
        bodyStyle: {};
        isCentered: boolean;
        size: string;
    };
};
export {};
