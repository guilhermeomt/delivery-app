import { IconProps } from "types";

export const IconBookmark = (props: IconProps) => {
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
        d="M5.57143 0H18.4286C19.8429 0 21 1.18667 21 2.66667V24L12 20L3 24V2.66667C3 1.19391 4.15127 0 5.57143 0ZM12 17.0933L18.4286 20V2.66667H5.57143V20L12 17.0933Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
