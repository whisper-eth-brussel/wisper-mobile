import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
export const CloseSvg = (props: SvgProps) => (
  <Svg width={34} height={35} fill="none" {...props}>
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <Path d="M25.19 9.997 8.714 25.003M9.5 9.216l15.006 16.476" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          d="m17.744.548 16.16 17.743-17.743 16.161L0 16.708z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
