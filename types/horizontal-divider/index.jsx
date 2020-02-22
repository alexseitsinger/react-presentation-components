import React from "react";
import { SmallerText, SuperText } from "@alexseitsinger/react-text-components";
import { HorizontalDividerContainer, HorizontalDividerSide, HorizontalDividerText, } from "./elements";
export const HorizontalDivider = ({ containerSpacing, lineColor, lineSize, text, textColor, textSpacing, }) => (<HorizontalDividerContainer containerSpacing={containerSpacing}>
    <HorizontalDividerSide lineSize={lineSize} lineColor={lineColor}/>
    <HorizontalDividerText textSpacing={textSpacing} textColor={textColor}>
      <SmallerText>
        <SuperText>{text}</SuperText>
      </SmallerText>
    </HorizontalDividerText>
    <HorizontalDividerSide lineSize={lineSize} lineColor={lineColor}/>
  </HorizontalDividerContainer>);
//# sourceMappingURL=index.jsx.map