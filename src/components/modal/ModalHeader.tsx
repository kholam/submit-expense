import React from 'react';
import { ModalProps } from '../../interface';
import { AppIcon, CloseModalIcon } from '../svg';

// custom react modal header component based on tje design
const ModalHeader = ({ handleCloseModal } : ModalProps): React.ReactElement =>{

 return (
     <div className="modal-header">
         <AppIcon className="app-icon" />
         <p className="modal-title-text">Submit Expense</p>
         <CloseModalIcon className="close-icon" onClick={() => { handleCloseModal() }} />
     </div>
 )
}; 

export default ModalHeader;