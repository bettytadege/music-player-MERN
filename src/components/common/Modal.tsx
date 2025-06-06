import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps{
  className:string;
  open:string;
  children:React.ReactNode
}

function Modal({ children, open, className }:ModalProps) {
 const refDialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const curr:HTMLDialogElement | null = refDialog.current;
    // if (open ) {
    //   curr.showModal();
    // } else {
    //   if (curr.open) {
    //     curr.close();
    //   }
    // }
    //  console.log(curr)
  }, [open]);

  return createPortal(
    <dialog className={`modal z-10 ${className}`} ref={refDialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
