import React from "react"
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
