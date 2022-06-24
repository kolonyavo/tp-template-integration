import React from "react";
import ModalUpdate from "./modalUpdate";
import useModal from "./useModal";

const ButUp = (props) => {
    const {isShowing, toggle} = useModal();
    return (
        <div className="app">
            <button className="button-default button" onClick={toggle}>{props.type}</button>
            <ModalUpdate
            isShowing={isShowing}
            hide={toggle}
            />
        </div>
    );
  };

  export default ButUp;