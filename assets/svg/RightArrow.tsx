import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
export const RightArrow = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M9.75 4.875 17.875 13 9.75 21.125"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
