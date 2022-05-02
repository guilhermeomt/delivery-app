import React from "react";
import Styles from "./styles.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
};

export function Button({ ...props }: ButtonProps) {
  return (
    <button className={`${props.className} ${Styles.button}`}>
      {props.children}
    </button>
  );
}
