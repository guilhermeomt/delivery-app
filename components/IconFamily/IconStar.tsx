import { IconProps } from "types";

export const IconStar = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "16px"}
      height={size || "16px"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12.8589L12.944 16L11.632 10.08L16 6.09684L10.248 5.57474L8 0L5.752 5.57474L0 6.09684L4.36 10.08L3.056 16L8 12.8589Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
