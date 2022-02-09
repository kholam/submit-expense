import React from "react";
import { ModalFooter, ModalHeader } from ".";
import { SubmitExpenseModalProps } from "../../interface";

const SubmitExpenseModal = ({ displayModal, setShowDisplayModal }: SubmitExpenseModalProps): React.ReactElement => {

    const handleCloseModal = () => {
        setShowDisplayModal(!displayModal);
    }

    return (
        <React.Fragment>
            {displayModal && <div className="modal">
                <ModalHeader displayModal={displayModal} setShowDisplayModal={setShowDisplayModal}/>
                <ModalFooter handleCloseModal={handleCloseModal}/>
            </div>}
        </React.Fragment>
    )
}; 

export default SubmitExpenseModal;