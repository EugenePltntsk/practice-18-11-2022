import React, { useEffect, useState } from "react";
import { ModalContentDiv, ModalDiv } from "./Modalochka.styled";

export default function Modalochka() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <button type="button" onClick={()=> toggle()}>
        Open/Close Modal
      </button>
      {isOpen && 
        <ModalDiv>
          <ModalContentDiv>
            <h2>Hello! It's me - Modalochka!</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti alias eos veniam odio nostrum illo sequi consequatur libero nesciunt, magni cupiditate at! Autem doloremque quae corporis voluptas nisi deleniti excepturi nesciunt recusandae nobis molestiae? Beatae enim modi officia culpa deleniti facere minima, ea dolorum ab velit alias ipsam facilis, ullam, unde nihil fuga atque! 
            </p>
          </ModalContentDiv>
        </ModalDiv>
      }
    </>
  );
}
