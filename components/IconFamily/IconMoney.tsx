import { IconProps } from "types";

export const IconMoney = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "16px"}
      height={size || "12px"}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4 0H1.6C0.712 0 0 0.6675 0 1.5V10.5C0 11.3284 0.716344 12 1.6 12H14.4C15.2837 12 16 11.3284 16 10.5V1.5C16 0.6675 15.28 0 14.4 0ZM14.4 10.5H1.6V1.5H14.4V10.5ZM8.8 9.75H7.2V9H5.6V7.5H8.8V6.75H6.4C5.95817 6.75 5.6 6.41421 5.6 6V3.75C5.6 3.33579 5.95817 3 6.4 3H7.2V2.25H8.8V3H10.4V4.5H7.2V5.25H9.6C10.0418 5.25 10.4 5.58579 10.4 6V8.25C10.4 8.66421 10.0418 9 9.6 9H8.8V9.75Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
