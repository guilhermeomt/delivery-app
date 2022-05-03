import { IconProps } from "types";

export const IconStore = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "24px"}
      height={size || "24px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33333 2H22.6667V4.625H1.33333V2ZM24 15.125V12.5L22.6667 5.9375H1.33333L0 12.5V15.125H1.33333V23H14.6667V15.125H20V23H22.6667V15.125H24ZM12 20.375H4V15.125H12V20.375Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
