import React from 'react';
import { ModalProps } from '../../interface';

const ModalFooter = ({ handleCloseModal } : ModalProps)=>{

    return (
        <div className="modal-footer">
            <div className="modal-buttons">
                <button className="btn btn-outline mr-12" onClick={handleCloseModal}>Cancel</button>
                <button className="btn btn-primary">Next</button>
            </div>
        </div>
    )
}; 

export default ModalFooter;