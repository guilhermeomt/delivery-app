import { InputIcon } from "components/InputIcon";
import React from "react";
import Styles from "./styles.module.css";

type InputTextProps = {
  label: string;
  type: string;
  placeholder: string;
};

export function InputText({ ...props }: InputTextProps) {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.icon}>
          <InputIcon size={24} color="#503e9d" />
        </div>
        <div className="grow">
          <label className={Styles.label}>{props.label}</label>
          <input
            className={Styles.input}
            type={props.type}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </>
  );
}
