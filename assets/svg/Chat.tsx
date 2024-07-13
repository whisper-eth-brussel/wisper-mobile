import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const ChatSvg = (props: SvgProps) => (
  <Svg width={28} height={26} fill="none" {...props}>
    <Path
      fill="#24252A"
      stroke="#24252A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.683 9.298a7.854 7.854 0 0 1 7.846 7.851 7.762 7.762 0 0 1-1.31 4.341l1.31 3.51-4.412-.794a7.843 7.843 0 0 1-11.085-5.293 7.857 7.857 0 0 1 4.242-8.837 7.842 7.842 0 0 1 3.41-.778Z"
    />
    <Path
      stroke="#24252A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.47 4.637c-1.32-1.557-3.131-2.693-5.182-3.251a11.052 11.052 0 0 0-6.257.138c-2.02.647-3.77 1.862-5.01 3.475-1.239 1.613-1.904 3.544-1.903 5.524a8.959 8.959 0 0 0 1.725 5.285L1.118 20.06l4.157-.69"
    />
  </Svg>
);
