import { SVGProps, forwardRef, memo } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  color?: string;
};
export const InvertedRectangle = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { color, ...rest } = props;

    return (
      <svg
        fill={"none"}
        height={20}
        ref={ref}
        width={27}
        xmlns={"http://www.w3.org/2000/svg"}
        {...props}
      >
        <rect
          height={24}
          rx={2}
          stroke={color}
          strokeWidth={2}
          transform={"rotate(90 25 1)"}
          width={18}
          x={25}
          y={1}
        />
      </svg>
    );
  }),
);
