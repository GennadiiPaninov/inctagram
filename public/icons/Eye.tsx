import { forwardRef, memo } from "react";

import { IconProps } from "@/shared/assets/types/types";

export const Eye = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
    <svg
      fill={"none"}
      height={"24"}
      ref={ref}
      viewBox={"0 0 24 24"}
      width={"24"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <g clipPath={"url(#clip0_5661_2355)"}>
        <path
          d={
            "M18.225 9.58334C17.6917 8.65834 14.7583 4.01667 9.775 4.16667C5.16667 4.28334 2.5 8.33334 1.775 9.58334C1.70186 9.71002 1.66335 9.85372 1.66335 10C1.66335 10.1463 1.70186 10.29 1.775 10.4167C2.3 11.325 5.10833 15.8333 10.0167 15.8333H10.225C14.8333 15.7167 17.5083 11.6667 18.225 10.4167C18.2981 10.29 18.3366 10.1463 18.3366 10C18.3366 9.85372 18.2981 9.71002 18.225 9.58334ZM10.1833 14.1667C6.59167 14.25 4.25 11.175 3.51667 10C4.35 8.65834 6.525 5.91667 9.85833 5.83334C13.4333 5.74167 15.7833 8.82501 16.525 10C15.6667 11.3417 13.5167 14.0833 10.1833 14.1667Z"
          }
          fill={"white"}
        />
        <path
          d={
            "M10 7.08334C9.42314 7.08334 8.85923 7.2544 8.37959 7.57489C7.89994 7.89538 7.52611 8.3509 7.30535 8.88385C7.0846 9.4168 7.02684 10.0032 7.13938 10.569C7.25192 11.1348 7.5297 11.6545 7.93761 12.0624C8.34551 12.4703 8.86521 12.7481 9.43099 12.8606C9.99676 12.9732 10.5832 12.9154 11.1162 12.6947C11.6491 12.4739 12.1046 12.1001 12.4251 11.6204C12.7456 11.1408 12.9167 10.5769 12.9167 10C12.9167 9.22646 12.6094 8.4846 12.0624 7.93762C11.5154 7.39063 10.7735 7.08334 10 7.08334ZM10 11.25C9.75277 11.25 9.5111 11.1767 9.30554 11.0393C9.09998 10.902 8.93976 10.7068 8.84515 10.4784C8.75054 10.25 8.72579 9.99862 8.77402 9.75615C8.82225 9.51367 8.9413 9.29094 9.11612 9.11613C9.29093 8.94131 9.51366 8.82226 9.75614 8.77403C9.99861 8.7258 10.2499 8.75055 10.4784 8.84516C10.7068 8.93977 10.902 9.09999 11.0393 9.30555C11.1767 9.51111 11.25 9.75278 11.25 10C11.25 10.3315 11.1183 10.6495 10.8839 10.8839C10.6495 11.1183 10.3315 11.25 10 11.25Z"
          }
          fill={"white"}
        />
      </g>
      <defs>
        <clipPath id={"clip0_5661_2355"}>
          <rect fill={"white"} height={"20"} width={"20"} />
        </clipPath>
      </defs>
    </svg>
  )),
);
