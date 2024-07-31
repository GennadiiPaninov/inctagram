import { forwardRef, memo } from "react";

import { IconProps } from "@/shared/assets/types/types";

export const Vectors = memo(
  forwardRef<SVGSVGElement, IconProps>(({color}, ref) => {
    return (
      <svg
        fill={"none"}
        height={36}
        ref={ref}
        width={36}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <rect fill={"#171717"} height={36} opacity={0.8} rx={2} width={36} />
        <g clipPath={"url(#a)"} fill={color}>
          <path
            d={
              "M26 11a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 1 0 1.42 1.42L24 13.42V16a1 1 0 0 0 2 0v-5Zm-9.29 8.29a1 1 0 0 0-1.42 0L12 22.57V20a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-2.58l3.29-3.29a1 1 0 0 0 0-1.42Z"
            }
          />
        </g>
        <defs>
          <clipPath id={"a"}>
            <path d={"M6 6h24v24H6z"} fill={"#fff"} />
          </clipPath>
        </defs>
      </svg>
    );
  }),
);
