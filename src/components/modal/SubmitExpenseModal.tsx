import React, { useState } from "react";
import { ModalContent, ModalFooter, ModalHeader } from ".";
import { SubmitExpenseModalProps } from "../../interface";

const SubmitExpenseModal = ({ displayModal, setShowDisplayModal }: SubmitExpenseModalProps): React.ReactElement => {
    //manages the forms validity state
    const [isFormValid, setIsFormValid] = useState(false);

    const handleCloseModal = () => {
        setShowDisplayModal(!displayModal);
    }

    return (
        <React.Fragment>
            {displayModal && <div className="modal">
                <ModalHeader handleCloseModal={handleCloseModal}/>
                <ModalContent isFormValid={isFormValid} setIsFormValid={setIsFormValid}/>
                <ModalFooter handleCloseModal={handleCloseModal} isFormValid={isFormValid}/>
            </div>}
        </React.Fragment>
    )
}; 

export default SubmitExpenseModal;