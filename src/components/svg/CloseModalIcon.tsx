import React from 'react'
import SVGProps from '../../interface/SVGProps';

const CloseModalIcon = ({ width = "36", height = "36", color = "#1D1C1D", className }: SVGProps): React.ReactElement => {
    return (
        <svg width={`${width}`} height={`${height}`} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M19.06 18L23.78 13.28C23.92 13.14 24 12.95 24 12.75C24 12.34 23.66 12 23.25 12C23.05 12 22.86 12.08 22.72 12.22L18 16.94L13.28 12.22C13.14 12.08 12.96 12 12.75 12C12.34 12 12 12.34 12 12.75C12 12.95 12.09 13.14 12.22 13.28L16.94 18L12.22 22.72C12.09 22.86 12 23.04 12 23.25C12 23.66 12.34 24 12.75 24C12.96 24 13.14 23.91 13.28 23.78L18 19.06L22.72 23.78C22.86 23.91 23.05 24 23.25 24C23.66 24 24 23.66 24 23.25C24 23.04 23.92 22.86 23.78 22.72L19.06 18Z" fill={`${color}`} fill-opacity="0.7" />
        </svg>

    );
};

export default CloseModalIcon;