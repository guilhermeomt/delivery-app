import { IconProps } from "types";

export const IconMap = (props: IconProps) => {
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
        d="M23.12 0.04L23.3333 0C23.7015 0 24 0.298477 24 0.666667V20.8267C24 21.1333 23.8 21.3733 23.52 21.4667L16 24L8 21.2L0.88 23.96L0.666667 24C0.298477 24 0 23.7015 0 23.3333V3.17333C0 2.86667 0.2 2.62667 0.48 2.53333L8 0L16 2.8L23.12 0.04ZM14.6667 5.16L9.33333 3.29333V18.84L14.6667 20.7067V5.16ZM2.66667 4.61333L6.66667 3.26667V18.8667L2.66667 20.4133V4.61333ZM17.3333 20.7333L21.3333 19.3867V3.6L17.3333 5.14667V20.7333Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
