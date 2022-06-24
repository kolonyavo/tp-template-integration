import React from "react";
import ModalGetEmp from "./GetEmp";
import useModal from "./useModal";

const ButEmp = (props) => {
    const {isShowing, toggle} = useModal();
    return (
        <div className="app">
            <button className="button-default button" onClick={toggle}>{props.type}</button>
            <ModalGetEmp
            isShowing={isShowing}
            hide={toggle}
            />
        </div>
    );
  };

  export default ButEmp;