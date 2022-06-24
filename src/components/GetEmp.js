import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import PersonList from "./Employee";


const ModalGetEmp = ({isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay">
        <div className='doublemodal'>
        <PersonList/>
        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}/>
        </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ModalGetEmp;