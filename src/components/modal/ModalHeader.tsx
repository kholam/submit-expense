import React from 'react';
import { SubmitExpenseModalProps } from '../../interface';
import { AppIcon, CloseModalIcon } from '../svg';

const ModalHeader = ({ displayModal, setShowDisplayModal }: SubmitExpenseModalProps): React.ReactElement =>{

    const handleCloseModal = () => {
        setShowDisplayModal(!displayModal);
    }

 return (
     <div className="modal-header">
         <AppIcon className="app-icon" />
         <p className="modal-title-text">Submit Expense</p>
         <CloseModalIcon className="close-icon" onClick={() => { handleCloseModal() }} />
     </div>
 )
}; 

export default ModalHeader;