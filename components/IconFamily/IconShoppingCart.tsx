import { IconProps } from "types";

export const IconShoppingCart = (props: IconProps) => {
  const { size, color } = props;

  return (
    <svg
      width={size || "20px"}
      height={size || "20px"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V2H2L5.6 9.59L4.24 12.04C4.09 12.32 4 12.65 4 13C4 14.1046 4.89543 15 6 15H18V13H6.42C6.28193 13 6.17 12.8881 6.17 12.75C6.17 12.7 6.18 12.66 6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.58 16.3 9.97L19.88 3.5C19.95 3.34 20 3.17 20 3C20 2.44772 19.5523 2 19 2H4.21L3.27 0H0ZM16 16C14.89 16 14 16.89 14 18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18C18 16.89 17.1 16 16 16ZM4 18C4 16.89 4.89 16 6 16C7.1 16 8 16.89 8 18C8 19.1046 7.10457 20 6 20C4.89543 20 4 19.1046 4 18Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
