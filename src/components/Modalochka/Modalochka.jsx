import React, { useEffect, useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import { ModalContentDiv, ModalDiv } from "./Modalochka.styled";

export default function Modalochka() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" onClick={toggle}>
        Open/Close Modal
      </button>
      {isOpen && <ModalWindow toggle={toggle}/>}
    </>
  );
}
