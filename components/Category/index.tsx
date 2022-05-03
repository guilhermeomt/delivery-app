import React from "react";
import { IconBase } from "..";
import Styles from "./styles.module.css";

type CategoryProps = {
  name: string;
  legend: string;
  iconName: string;
};

export function Category({ name, legend, iconName }: CategoryProps) {
  return (
    <div className={Styles.card}>
      <div>
        <IconBase iconName={iconName} />
      </div>
      <h3>{name}</h3>
      <p>{legend}</p>
    </div>
  );
}
