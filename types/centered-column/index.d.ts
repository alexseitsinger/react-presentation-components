import React, { ReactNode } from "react";
import PropTypes from "prop-types";
interface CenteredColumnProps {
    children: ReactNode | ReactNode[];
    isMaximized?: boolean;
}
export declare const CenteredColumn: {
    ({ children, isMaximized, }: CenteredColumnProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
};
export {};
