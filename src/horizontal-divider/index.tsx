import React from "react"
import PropTypes from "prop-types"
import { SmallerText, SuperText } from "@alexseitsinger/react-text-components"

import {
  HorizontalDividerContainer,
  HorizontalDividerSide,
  HorizontalDividerText,
} from "./elements"

interface HorizontalDividerProps {
  text: string;
  textColor?: string;
  textSpacing?: string;
  lineSize?: string;
  lineColor?: string;
  containerSpacing?: string;
}

export const HorizontalDivider = ({
  containerSpacing,
  lineColor,
  lineSize,
  text,
  textColor,
  textSpacing,
}: HorizontalDividerProps): React.ReactElement => (
  <HorizontalDividerContainer containerSpacing={containerSpacing}>
    <HorizontalDividerSide lineSize={lineSize} lineColor={lineColor} />
    <HorizontalDividerText textSpacing={textSpacing} textColor={textColor}>
      <SmallerText>
        <SuperText>{text}</SuperText>
      </SmallerText>
    </HorizontalDividerText>
    <HorizontalDividerSide lineSize={lineSize} lineColor={lineColor} />
  </HorizontalDividerContainer>
)

HorizontalDivider.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textSpacing: PropTypes.string,
  lineSize: PropTypes.string,
  lineColor: PropTypes.string,
  containerSpacing: PropTypes.string,
}

HorizontalDivider.defaultHorizontalDividerProps = {
  textColor: "#AAAAAA",
  textSpacing: "0.75em",
  lineSize: "1px",
  lineColor: "#999999",
  containerSpacing: "0.75em",
}
