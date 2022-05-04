import { IconProps } from "types";

export const IconArrowTopDown = (props: IconProps) => {
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
        d="M6.645 15L12 20.5674L17.355 15L19 16.7224L12 24L5 16.7224L6.645 15Z"
        fill={color || "gray"}
      />
      <path
        d="M17.355 9L12 3.43261L6.645 9L5 7.27763L12 0L19 7.27763L17.355 9Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
