import React, { useState } from 'react'
import SubmitExpenseModal from '../components/modal/SubmitExpenseModal';

// displays a button that is horizontally and vertically centered on the page
const SubmitExpense = (): React.ReactElement => {
    const [displayModal, setDisplayModal] = useState(false);

    const handleButtonClick = () => {
        setDisplayModal(!displayModal);
    }


    return (
        <React.Fragment>
            <div className="position-relative">
                <div className="container">
                    <button className='btn btn-primary' onClick={handleButtonClick}>
                        Open
                    </button>
                </div>
            </div>
            <SubmitExpenseModal
                displayModal={displayModal}
                setShowDisplayModal={setDisplayModal}
            />
        </React.Fragment>
    );
};

export default SubmitExpense;