import React from 'react'
import SVGProps from '../../interface/SVGProps';

const CalendarIcon = ({ width = 20, height = 20, color = "#1D1C1D", className }: SVGProps): React.ReactElement => {
    return (
        <svg width={`${width}`} height={`${width}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M7.25 7C8.49 7 9.5 5.99 9.5 4.75V2.25C9.5 1.01 8.49 0 7.25 0C6.01 0 5 1.01 5 2.25V4.75C5 5.99 6.01 7 7.25 7ZM12.75 7C13.99 7 15 5.99 15 4.75V2.25C15 1.01 13.99 0 12.75 0C11.51 0 10.5 1.01 10.5 2.25V4.75C10.5 5.99 11.51 7 12.75 7ZM7.25 5.5C6.83 5.5 6.5 5.16 6.5 4.75V2.25C6.5 1.84 6.83 1.5 7.25 1.5C7.66 1.5 8 1.84 8 2.25V4.75C8 5.16 7.66 5.5 7.25 5.5ZM12.75 5.5C12.33 5.5 12 5.16 12 4.75V2.25C12 1.84 12.33 1.5 12.75 1.5C13.16 1.5 13.5 1.84 13.5 2.25V4.75C13.5 5.16 13.16 5.5 12.75 5.5ZM3.5 20H16.49C17.87 20 19 18.87 19 17.49V5.51C19 4.12 17.87 3 16.49 3C16.01 3 15.7 3.26 15.7 3.75C15.7 4.24 16.01 4.5 16.49 4.5C17.05 4.5 17.5 4.95 17.5 5.51V17.49C17.5 18.05 17.05 18.5 16.49 18.5H3.5C2.95 18.5 2.5 18.05 2.5 17.49V5.51C2.5 4.95 2.95 4.5 3.5 4.5C3.99 4.5 4.3 4.24 4.3 3.75C4.3 3.26 3.99 3 3.5 3C2.12 3 1 4.12 1 5.51V17.49C1 18.87 2.12 20 3.5 20ZM10.01 11C10.56 11 11.01 10.55 11.01 10C11.01 9.44 10.56 9 10.01 9C9.45 9 9.01 9.45 9.01 10C9.01 10.56 9.45 11 10.01 11ZM14.01 11C14.56 11 15.01 10.55 15.01 10C15.01 9.44 14.56 9 14.01 9C13.45 9 13.01 9.45 13.01 10C13.01 10.56 13.45 11 14.01 11ZM6.01 14C6.56 14 7.01 13.55 7.01 13C7.01 12.44 6.56 12 6.01 12C5.45 12 5.01 12.45 5.01 13C5.01 13.56 5.45 14 6.01 14ZM10.01 14C10.56 14 11.01 13.55 11.01 13C11.01 12.44 10.56 12 10.01 12C9.45 12 9.01 12.45 9.01 13C9.01 13.56 9.45 14 10.01 14ZM14.01 14C14.56 14 15.01 13.55 15.01 13C15.01 12.44 14.56 12 14.01 12C13.45 12 13.01 12.45 13.01 13C13.01 13.56 13.45 14 14.01 14ZM6.01 17C6.56 17 7.01 16.55 7.01 16C7.01 15.44 6.56 15 6.01 15C5.45 15 5.01 15.45 5.01 16C5.01 16.56 5.45 17 6.01 17ZM10.01 17C10.56 17 11.01 16.55 11.01 16C11.01 15.44 10.56 15 10.01 15C9.45 15 9.01 15.45 9.01 16C9.01 16.56 9.45 17 10.01 17ZM14.01 17C14.56 17 15.01 16.55 15.01 16C15.01 15.44 14.56 15 14.01 15C13.45 15 13.01 15.45 13.01 16C13.01 16.56 13.45 17 14.01 17Z" fill={`${color}`} fill-opacity="0.7" />
        </svg>

    );
};

export default CalendarIcon;