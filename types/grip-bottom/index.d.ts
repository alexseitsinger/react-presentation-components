import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { CSSObject } from "@emotion/core";
interface Props {
    children: ReactNode | ReactNode[];
    containerStyle: CSSObject;
    isMaximized: boolean;
}
export declare const GripBottom: {
    ({ children, containerStyle, isMaximized, }: Props): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        containerStyle: any;
        isMaximized: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        isMaximized: boolean;
        containerStyle: {};
    };
};
export {};
