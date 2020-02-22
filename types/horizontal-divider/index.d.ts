import React from "react";
import PropTypes from "prop-types";
interface HorizontalDividerProps {
    text: string;
    textColor?: string;
    textSpacing?: string;
    lineSize?: string;
    lineColor?: string;
    containerSpacing?: string;
}
export declare const HorizontalDivider: {
    ({ containerSpacing, lineColor, lineSize, text, textColor, textSpacing, }: HorizontalDividerProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    propTypes: {
        text: PropTypes.Validator<string>;
        textColor: PropTypes.Requireable<string>;
        textSpacing: PropTypes.Requireable<string>;
        lineSize: PropTypes.Requireable<string>;
        lineColor: PropTypes.Requireable<string>;
        containerSpacing: PropTypes.Requireable<string>;
    };
    defaultHorizontalDividerProps: {
        textColor: string;
        textSpacing: string;
        lineSize: string;
        lineColor: string;
        containerSpacing: string;
    };
};
export {};
