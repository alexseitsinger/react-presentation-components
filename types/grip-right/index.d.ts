import React, { ReactNode } from "react";
import PropTypes from "prop-types";
interface Props {
    children: ReactNode | ReactNode[];
    topPosition: string;
    bottomPosition: string;
    isMaximized: boolean;
}
export declare const GripRight: {
    ({ bottomPosition, children, isMaximized, topPosition, }: Props): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        topPosition: PropTypes.Requireable<React.ReactText>;
        bottomPosition: PropTypes.Requireable<React.ReactText>;
        isMaximized: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        topPosition: string;
        bottomPosition: string;
        isMaximized: boolean;
    };
};
export {};
