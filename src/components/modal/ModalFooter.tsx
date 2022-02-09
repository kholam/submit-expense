import React from 'react';
import { ModalProps } from '../../interface';

// custom modal footer component
// handleCloseModal -> manage closing and opening of the modal
// isFormValid -> true if form is valid else invalid
const ModalFooter = ({ handleCloseModal, isFormValid } : ModalProps)=>{

    // perform the necessary action and proceed to the next step
    const handleClickNext = (event: React.MouseEvent<HTMLButtonElement>) =>{
    // form values can be accessed here 
    // create a context and store form values in for access here
        event.preventDefault();
    }

    return (
        <div className="modal-footer">
            <div className="modal-buttons">
                <button className="btn btn-outline mr-12" onClick={handleCloseModal}>Cancel</button>
                {/* disabled the next button if form is invalid */}
                <button className={`btn btn-primary ${!isFormValid ? 'disabled' : ''}`} onClick={handleClickNext}>Next</button>
            </div>
        </div>
    )
}; 

export default ModalFooter;