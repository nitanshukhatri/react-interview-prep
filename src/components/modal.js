import React, { useRef } from "react";
import ReactDom from "react-dom";
export const Modal = (props) => {
  const { children, setShowModal } = props;
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>This is a Modal</h2>
        {children}
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
