import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const CameraSvg = (props: SvgProps) => (
  <Svg width={24} height={20} fill="none" {...props}>
    <Path
      stroke="#DBC9FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.846 11.73-1.294 1.04-.977-1.375"
    />
    <Path
      stroke="#DBC9FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.48 12.663c.214-.436.36-.92.418-1.436.266-2.311-1.283-4.414-3.458-4.696a3.737 3.737 0 0 0-1.958.272M7.07 9.77l1.293-1.04.978 1.375"
    />
    <Path
      stroke="#DBC9FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.434 8.834a4.4 4.4 0 0 0-.418 1.436c-.265 2.312 1.283 4.414 3.459 4.696a3.739 3.739 0 0 0 1.958-.272"
    />
    <Path
      stroke="#DBC9FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M23 5.91c0-.435-.178-.851-.496-1.158a1.722 1.722 0 0 0-1.196-.48h-1.915a3 3 0 0 1-2.37-1.16l-.738-.95A3 3 0 0 0 13.915 1h-3.83a3 3 0 0 0-2.37 1.161l-.737.95a3 3 0 0 1-2.37 1.162H2.691c-.449 0-.879.172-1.196.479A1.61 1.61 0 0 0 1 5.909v11.455c0 .434.178.85.496 1.157.317.306.747.479 1.196.479h18.616c.448 0 .879-.172 1.196-.48A1.61 1.61 0 0 0 23 17.365V5.909Z"
    />
  </Svg>
);
