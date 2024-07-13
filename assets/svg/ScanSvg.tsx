import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ScanSvg = (props: SvgProps) => (
  <Svg width={22} height={23} fill="none" {...props}>
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.524 5.346H6.447c-.85 0-1.538.689-1.538 1.538v3.077c0 .85.688 1.538 1.538 1.538h3.077c.85 0 1.539-.688 1.539-1.538V6.884c0-.85-.69-1.538-1.539-1.538ZM4.909 1.5H2.6a1.538 1.538 0 0 0-1.538 1.538v2.308M17.216 1.5h2.308a1.538 1.538 0 0 1 1.538 1.538v2.308M4.909 21.5H2.6a1.539 1.539 0 0 1-1.538-1.538v-2.308M17.216 21.5h2.308a1.538 1.538 0 0 0 1.538-1.538v-2.308M4.909 15.346v2.307h2.307M11.063 17.653v-2.307H8.755M17.216 7.653H14.91V5.346M17.216 13.038V10.73H14.91M14.909 15.346v2.307h2.307"
    />
  </Svg>
);
export default ScanSvg;
