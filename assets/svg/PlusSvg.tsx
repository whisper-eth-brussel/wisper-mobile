import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
export const PlusSvg = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <G
      stroke="#24252A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      clipPath="url(#a)"
    >
      <Path d="M13.656 6.5v15M21.5 13.745h-15" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
