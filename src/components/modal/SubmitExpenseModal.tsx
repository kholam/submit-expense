import React from "react";
import { SubmitExpenseModalProps } from "../../interface";

const SubmitExpenseModal = ({ displayModal, setShowDisplayModal }: SubmitExpenseModalProps): React.ReactElement => {

    return (
        <React.Fragment>
            {displayModal && <div>
                submit expense modal
            </div>}
        </React.Fragment>
    )
}; 

export default SubmitExpenseModal;