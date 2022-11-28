import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalActiveSlice";

import { ModalContentDiv, ModalDiv } from "./Modal.styled";

export default function Modal({ product }) {
  const modalActive = useSelector((state) => state.modalActive);

  const dispatch = useDispatch();

  const setActiveFalse = () => {
    dispatch(closeModal());
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalDiv active={modalActive} onClick={setActiveFalse}>
      <ModalContentDiv className="modalContent" onClick={stopPropagation}>
        <p>Black Friday Sale</p>
        <p>{product?.name}</p>
        <p>{product?.description}</p>
        <p>Old Price: {product?.price}</p>
        <p>New Price: {product?.price * 0.87}</p>
      </ModalContentDiv>
    </ModalDiv>
  );
}
