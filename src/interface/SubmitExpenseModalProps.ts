import React from 'react'

// props for submit expense modal
interface SubmitExpenseModalProps {
 displayModal: boolean; // show modal if true else hide it
 setShowDisplayModal: React.Dispatch<React.SetStateAction<boolean>>; // manages showing the modal
}

export default SubmitExpenseModalProps;