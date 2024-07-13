import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const VoiceSvg = (props: SvgProps) => (
  <Svg width={16} height={20} fill="none" {...props}>
    <Path
      stroke="#818193"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.154 9.308a3.462 3.462 0 0 1-6.923 0V4.462a3.462 3.462 0 1 1 6.923 0v4.846Z"
    />
    <Path
      stroke="#818193"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.615 10a6.22 6.22 0 0 1-3.844 5.76 6.217 6.217 0 0 1-2.386.47H7A6.217 6.217 0 0 1 .77 10M7.692 16.23V19"
    />
  </Svg>
);
