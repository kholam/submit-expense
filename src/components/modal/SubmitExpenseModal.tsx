import React from "react";
import { ModalContent, ModalFooter, ModalHeader } from ".";
import { SubmitExpenseModalProps } from "../../interface";

const SubmitExpenseModal = ({ displayModal, setShowDisplayModal }: SubmitExpenseModalProps): React.ReactElement => {

    const handleCloseModal = () => {
        setShowDisplayModal(!displayModal);
    }

    return (
        <React.Fragment>
            {displayModal && <div className="modal">
                <ModalHeader displayModal={displayModal} setShowDisplayModal={setShowDisplayModal}/>
                <ModalContent/>
                <ModalFooter handleCloseModal={handleCloseModal}/>
            </div>}
        </React.Fragment>
    )
}; 

export default SubmitExpenseModal;