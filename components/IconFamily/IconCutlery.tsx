import { IconProps } from "types";

export const IconCutlery = (props: IconProps) => {
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
        d="M8.33333 8.4H10.7778V0H13.2222V8.4C13.2222 10.944 11.1933 13.008 8.63889 13.164V24H5.58333V13.164C3.02889 13.008 1 10.944 1 8.4V0H3.44444V8.4H5.88889V0H8.33333V8.4ZM16.8889 14.4V4.8C16.8889 2.688 19.6267 0 23 0V24H19.9444V14.4H16.8889Z"
        fill={color || "gray"}
      />
    </svg>
  );
};
