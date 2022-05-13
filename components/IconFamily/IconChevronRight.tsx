import { IconProps } from "types";

export const IconChevronRight = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "24px"}
      height={size || "24px"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10.59L6.63949 6L2 1.41L3.43531 0L9.5 6L3.43531 12L2 10.59Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
