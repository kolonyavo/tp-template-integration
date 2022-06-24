import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Update from './Update';


const ModalUpdate = ({isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay">
        <div className='doublemodal'>
        <Update/>
        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}/>
        </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default ModalUpdate;