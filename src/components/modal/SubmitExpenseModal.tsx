import React from "react";
import { ModalHeader } from ".";
import { SubmitExpenseModalProps } from "../../interface";

const SubmitExpenseModal = ({ displayModal, setShowDisplayModal }: SubmitExpenseModalProps): React.ReactElement => {

    return (
        <React.Fragment>
            {displayModal && <div className="modal">
                <ModalHeader displayModal={displayModal} setShowDisplayModal={setShowDisplayModal}/>
            </div>}
        </React.Fragment>
    )
}; 

export default SubmitExpenseModal;