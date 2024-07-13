import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const ShareSvg = (props: SvgProps) => (
  <Svg width={19} height={18} fill="none" {...props}>
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.467 4.162 1.722-1.722a4.157 4.157 0 0 1 5.88 5.88l-1.723 1.722M10.819 13.569 9.097 15.29a4.157 4.157 0 0 1-5.88-5.88L4.94 7.69M11.995 6.515 7.29 11.218"
    />
  </Svg>
);
