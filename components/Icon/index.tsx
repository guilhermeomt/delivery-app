import { IconProps } from "types";
import {
  IconArrowTopDown,
  IconBicycle,
  IconBookmark,
  IconChevronRight,
  IconCoupon,
  IconCutlery,
  IconDocument,
  IconFeed,
  IconFilter,
  IconFire,
  IconGear,
  IconHome,
  IconMail,
  IconMap,
  IconMoney,
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
  IconStar,
  IconStore,
  IconTargetLocation,
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
    case "home":
      return <IconHome size={size} color={color} />;
    case "bookmark":
      return <IconBookmark size={size} color={color} />;
    case "feed":
      return <IconFeed size={size} color={color} />;
    case "document":
      return <IconDocument size={size} color={color} />;
    case "letter":
      return <IconMail size={size} color={color} />;
    case "gear":
      return <IconGear size={size} color={color} />;
    case "arrow-top-down":
      return <IconArrowTopDown size={size} color={color} />;
    case "chevron-right":
      return <IconChevronRight size={size} color={color} />;
    case "star":
      return <IconStar size={size} color={color} />;
    case "money":
      return <IconMoney size={size} color={color} />;
    case "target-location":
      return <IconTargetLocation size={size} color={color} />;
    case "shopping-bag":
      return <IconShoppingBag size={size} color={color} />;
    case "shopping-cart":
      return <IconShoppingCart size={size} color={color} />;
    case "coupon":
      return <IconCoupon size={size} color={color} />;
    case "filter":
      return <IconFilter size={size} color={color} />;
    case "search":
      return <IconSearch size={size} color={color} />;
    default:
      return null;
  }
};
