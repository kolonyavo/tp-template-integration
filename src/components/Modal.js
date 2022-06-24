import React from 'react';
import ReactDOM from 'react-dom';
import Ajout from './Ajout';
import './styles.css';

const Modal = ({isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay">
        <div className='doublemodal'>
        <Ajout/>
        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}/>
        </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;