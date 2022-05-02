import { AiOutlineMail } from "react-icons/ai";

type InputIconProps = {
  size?: number;
  color?: string;
  title?: string;
};

export function InputIcon({ ...props }: InputIconProps) {
  return (
    <AiOutlineMail size={props.size} color={props.color} title={props.title} />
  );
}
