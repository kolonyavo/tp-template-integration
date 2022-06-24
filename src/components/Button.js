import React from "react";
import Modal from "./Modal";
import useModal from "./useModal";

const But = (props) => {
    const {isShowing, toggle} = useModal();
    return (
        <div className="app">
            <button className="button-default button" onClick={toggle}>{props.type}</button>
            <Modal
            isShowing={isShowing}
            hide={toggle}
            />
        </div>
    );
  };

  export default But;