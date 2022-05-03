import { IconProps } from "types";
import {
  IconBicycle,
  IconCutlery,
  IconFire,
  IconMap,
  IconStore,
  IconWallet,
} from "../IconFamily";

type IconBaseProps = IconProps & {
  iconName: string;
};

export const IconBase = ({
  iconName,
  size,
  color,
}: IconBaseProps): JSX.Element | null => {
  switch (iconName) {
    case "fire":
      return <IconFire size={size} color={color} />;
    case "bike":
      return <IconBicycle size={size} color={color} />;
    case "wallet":
      return <IconWallet size={size} color={color} />;
    case "map":
      return <IconMap size={size} color={color} />;
    case "store":
      return <IconStore size={size} color={color} />;
    case "cutlery":
      return <IconCutlery size={size} color={color} />;
    default:
      return null;
  }
};
