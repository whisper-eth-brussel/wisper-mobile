import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const BackSvg = (props: SvgProps) => (
  <Svg width={12} height={20} fill="none" {...props}>
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m10.063 18.25-8.126-8.125L10.063 2"
    />
  </Svg>
);
