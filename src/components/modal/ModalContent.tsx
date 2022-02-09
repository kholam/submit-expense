import React, { useState } from 'react';
import { currencies, todaysDate } from '../../helpers/Utils';
import { FormValues } from '../../interface';
import { Label } from '../form';
import FormInput from '../form/FormInput';
import { CalendarIcon } from '../svg';

const ModalContent = (): React.ReactElement => {
    const initialValues = { title: '', purchaseDate: todaysDate(), currency: '', amount: '' } as FormValues;
    const [formValues, setFormValues] = useState<FormValues>(initialValues);

    return (
        <div className="modal-content">
            <form name="testForm">
                {/* title */}
                <div className="form-title">
                    <Label text="Title" />
                    <FormInput name="title" placeholder="Expense Title" required className="input-text" />
                </div>
                {/* purchase date */}
                <div className="form-purchase-date">
                    <Label text="Purchase Date" />
                    <div className="input-date-picker">
                        <FormInput name="purchaseDate"
                            required
                            type="date"
                            value={formValues.purchaseDate}
                        />
                        <CalendarIcon className="calendar-icon" />
                    </div>
                </div>
                {/* currency selection */}
                <div className="form-currency">
                    <div className="flex-row">
                        <Label text="Currency" className="float-right" />
                        <select className="select" name="currency">
                            <option value=""> </option>
                            {
                                currencies.map((currency: string, index: number) => {
                                    return (
                                        <option value={`${currency.toLowerCase()}`} key={index}>
                                            {currency}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                {/* total amount */}
                <div className="form-amount">
                    <Label text="Amount" />
                    <FormInput
                        name="amount"
                        placeholder="Total Amount"
                        required
                        className="input-text"
                        type="number"
                    />
                </div>
            </form>
        </div>
    )
};

export default ModalContent;