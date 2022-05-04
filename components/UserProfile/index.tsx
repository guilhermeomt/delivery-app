import Image from "next/image";
import { IconArrowTopDown } from "components/IconFamily";
import Styles from "./styles.module.css";

export const UserProfile = () => {
  return (
    <div className={Styles.user_profile}>
      <Image src="/avatar.png" alt="Avatar" width={48} height={48} />
      <div className={Styles.user_data}>
        <h3>Mark Clarke</h3>
        <p>markclarke@gmail.com</p>
      </div>
      <div className={Styles.button}>
        <IconArrowTopDown color="#000" />
      </div>
    </div>
  );
};
