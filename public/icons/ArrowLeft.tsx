import { forwardRef, memo } from "react";

import { IconProps } from "@/shared/assets/types/types";

export const ArrowLeft = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
      <svg
        fill={"none"}
        height={"18"}
        ref={ref}
        viewBox={"0 0 24 24"}
        width={"18"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <defs>
          <clipPath id={"clip5661_2037"}>
            <rect
              fill={"white"}
              fillOpacity={"0"}
              height={"24.000000"}
              id={"arrow-back-outline"}
              width={"24.000000"}
            />
          </clipPath>
        </defs>
        <rect
          fill={"#FFFFFF"}
          fillOpacity={"0"}
          height={"24.000000"}
          id={"arrow-back-outline"}
          width={"24.000000"}
        />
        <g clipPath={"url(#clip5661_2037)"}>
          <g opacity={"0.000000"}>
            <path
              d={"M24 0L24 24L0 24L0 0L24 0Z"}
              fill={"#fff"}
              fillOpacity={"1.000000"}
              fillRule={"evenodd"}
              id={"Vector"}
            />
          </g>
          <path
            d={
              "M19 11L7.14 11L10.77 6.64C10.9397 6.43579 11.0214 6.1725 10.997 5.90808C10.9726 5.64365 10.8442 5.39973 10.64 5.23C10.4358 5.06026 10.1725 4.97861 9.90807 5.00298C9.64365 5.02736 9.39973 5.15578 9.23 5.36L4.23 11.36C4.19636 11.4077 4.16628 11.4579 4.14 11.51C4.14 11.56 4.14 11.59 4.07 11.64C4.02467 11.7547 4.00094 11.8767 4 12C4.00094 12.1233 4.02467 12.2453 4.07 12.36C4.07 12.41 4.07 12.44 4.14 12.49C4.16628 12.5421 4.19636 12.5923 4.23 12.64L9.23 18.64C9.32402 18.7529 9.44176 18.8437 9.57484 18.9059C9.70793 18.9681 9.85309 19.0002 10 19C10.2337 19.0005 10.4601 18.9191 10.64 18.77C10.7413 18.6861 10.825 18.5829 10.8863 18.4666C10.9477 18.3503 10.9855 18.2229 10.9975 18.092C11.0096 17.961 10.9957 17.8289 10.9567 17.7033C10.9176 17.5777 10.8542 17.461 10.77 17.36L7.14 13L19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
            }
            fill={"currentColor"}
            fillOpacity={"1.000000"}
            fillRule={"nonzero"}
            id={"Vector"}
          />
        </g>
      </svg>
    );
  }),
);
