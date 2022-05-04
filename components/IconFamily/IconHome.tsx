import { IconProps } from "types";

export const IconHome = (props: IconProps) => {
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
        d="M24 13.0534L12 1L0 13.0534H2.31282V24H10.7891V16.7023H13.2109V24H21.6872V13.0534H24ZM8.36731 14.2697V21.5674H4.73461V11.7277L12 4.42993L19.2654 11.7277V21.5674H15.6327V14.2697H13.2109H10.7891H8.36731Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
