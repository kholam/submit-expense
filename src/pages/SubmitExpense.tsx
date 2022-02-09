import React, { useState } from 'react'
import { SubmitExpenseModal } from '../components/modal';

// displays a button that is horizontally and vertically centered on the page
const SubmitExpense = (): React.ReactElement => {
    const [displayModal, setDisplayModal] = useState(false);
    
    const handleButtonClick = () => {
        // show modal if true else hide it
        setDisplayModal(!displayModal);
    }


    return (
        <React.Fragment>
            <div>
                {/* horizontally and vertically center button */}
                <div className="container">
                    <button className='btn btn-primary' onClick={handleButtonClick}>
                        Open
                    </button>
                </div>
                {/* end of button display */}
            </div>
            {/* submit expense modal */}
            <SubmitExpenseModal
                displayModal={displayModal}
                setShowDisplayModal={setDisplayModal}
            />
            {/* end of modal */}
        </React.Fragment>
    );
};

export default SubmitExpense;