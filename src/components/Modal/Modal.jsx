import React from "react";
import "./Modal.scss";
import closeBtn from "../../assets/img/close.svg";

function Modal({setModal,err}) {
  return (
    <div className="modal">
      <div className="modal__info">
        <div className="modal__title">Error while adding link element</div>
        <div className="modal__text">
          {err}
        </div>
      </div>
      <div className="modal__err">Error</div>
      <div className="modal__close" onClick={() => setModal(false)}><img src={closeBtn} alt="" /></div>
    </div>
  );
}

export default Modal;
