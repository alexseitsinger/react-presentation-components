import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { CSSObject } from "@emotion/core";
interface RightRuleProps {
    outerStyle: CSSObject;
    innerStyle: CSSObject;
    children: ReactNode | ReactNode[];
    ruleColor: string;
    ruleSize: string;
}
export declare const RightRule: {
    ({ children, innerStyle, outerStyle, ruleColor, ruleSize, }: RightRuleProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        outerStyle: any;
        innerStyle: any;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        ruleColor: PropTypes.Requireable<string>;
        ruleSize: PropTypes.Requireable<string>;
    };
    defaultProps: {
        outerStyle: {};
        innerStyle: {};
        ruleSize: string;
        ruleColor: string;
    };
};
export {};
