import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const PencilSvg = (props: SvgProps) => (
  <Svg width={15} height={15} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 12.74 1 14l1.26-4.5 8.24-8.2a1 1 0 0 1 1.43 0l1.77 1.78a1.001 1.001 0 0 1 0 1.42l-8.2 8.24Z"
    />
  </Svg>
);
