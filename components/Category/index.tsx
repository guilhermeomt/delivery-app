import React from "react";
import Link from "next/link";
import { IconBase } from "..";
import Styles from "./styles.module.css";

type CategoryProps = {
  id: string;
  name: string;
  legend: string;
  iconName: string;
  backgroundColor: string;
};

export function Category({
  id,
  name,
  legend,
  iconName,
  backgroundColor,
}: CategoryProps) {
  return (
    <Link href={`/categories/${id}`} passHref>
      <div className={Styles.card}>
        <div className={Styles.icon} style={{ backgroundColor }}>
          <IconBase iconName={iconName} color="#fff" />
        </div>
        <h3>{name}</h3>
        <p>{legend}</p>
      </div>
    </Link>
  );
}
