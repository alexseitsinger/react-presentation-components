import React, { ReactElement, ReactNode } from "react";
import PropTypes from "prop-types";
export interface MenuProps {
    onClick: () => void;
    renderButton: () => ReactElement;
    isVisible: boolean;
    children: ReactNode | ReactNode[];
}
export declare const Menu: {
    ({ children, renderButton, isVisible, onClick, }: MenuProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        onClick: PropTypes.Validator<(...args: any[]) => any>;
        renderButton: PropTypes.Validator<(...args: any[]) => any>;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        isVisible: PropTypes.Validator<boolean>;
    };
};
