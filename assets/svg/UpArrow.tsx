import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const UpArrow = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m3 13 7-6 7 6"
    />
  </Svg>
);
