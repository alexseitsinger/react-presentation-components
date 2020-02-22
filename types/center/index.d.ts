import React, { ReactNode } from "react";
import PropTypes from "prop-types";
interface CenterProps {
    children: ReactNode | ReactNode[];
}
export declare const Center: {
    ({ children }: CenterProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
};
export {};
