import React, { useEffect } from "react";
import { ModalContentDiv, ModalDiv } from "../Modalochka/Modalochka.styled";

export default function ModalWindow({toggle}) {

    const closeModal = (event) => {
        if (event.key === "Escape") {
            console.log('first', "first")
          toggle();
        }
      };

    useEffect(() => {
        document.addEventListener("keydown", closeModal);
        return () => {
          document.removeEventListener("keydown", closeModal);
        };
      }, []);


  return (
    <ModalDiv>
      <ModalContentDiv>
        <h2>Hello! It's me - Modalochka!</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          alias eos veniam odio nostrum illo sequi consequatur libero nesciunt,
          magni cupiditate at! Autem doloremque quae corporis voluptas nisi
          deleniti excepturi nesciunt recusandae nobis molestiae? Beatae enim
          modi officia culpa deleniti facere minima, ea dolorum ab velit alias
          ipsam facilis, ullam, unde nihil fuga atque!
        </p>
      </ModalContentDiv>
    </ModalDiv>
  );
}
