import React from "react";
import { useFilter } from "stores";
import Styles from "./styles.module.css";

export const FilterModal = () => {
  const { isOpen } = useFilter((store) => store.state);
  const { toggleModal } = useFilter((store) => store);

  return (
    <>
      {isOpen && (
        <div className={Styles.modal}>
          <div className={Styles.content}>Conteudo</div>
          <div className={Styles.overlay} onClick={toggleModal}></div>
        </div>
      )}
    </>
  );
};
