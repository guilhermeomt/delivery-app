import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconBase } from "..";
import Styles from "./styles.module.css";

type HighlightsItemProps = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  distance: number;
  price: number;
  bonus: string;
  brandUrl: string;
};

export const HighlightsItem = ({ ...props }: HighlightsItemProps) => {
  return (
    <div className={Styles.restaurant}>
      <div className={Styles.brand}>
        <Link href={`restaurants/${props.id}`}>
          <a>
            <Image
              src={props.brandUrl}
              width="64px"
              height="64px"
              alt={props.name}
            />
          </a>
        </Link>
      </div>
      <div className={Styles.info}>
        <Link href={`restaurants/${props.id}`}>
          <a>
            <h3>{props.name}</h3>
          </a>
        </Link>
        <div className="my-3">
          <div>
            <IconBase iconName="star" size={16} color="#facd5d" />
            <span>{props.rating}</span> ({props.reviews})
          </div>
          <div>
            <IconBase iconName="cutlery" size={16} color="#a3a3a4" />
            {props.category}
          </div>
          <div>
            <IconBase iconName="money" size={16} color="#a3a3a4" />
            {props.price}
          </div>
        </div>
        <div>
          <div>{props.bonus}</div>
          <div>
            <IconBase iconName="target-location" size={16} color="#a3a3a4" />
            {props.distance} km
          </div>
        </div>
      </div>
    </div>
  );
};
