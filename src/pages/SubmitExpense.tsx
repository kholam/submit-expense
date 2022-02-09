import React from 'react'

// displays a button that is horizontally and vertically centered on the page
const SubmitExpense = (): React.ReactElement => {

    return (
        <React.Fragment>
            <div className="position-relative">
                <div className="container">
                    <button className='btn btn-primary'>
                        Open
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SubmitExpense;