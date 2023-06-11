/* eslint-disable max-len */
import React from 'react';

interface ICupSvgProps {
    [key: string]: unknown;
}

export default function CupSvg(props: ICupSvgProps) {
    return (
        <svg
            {...props}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6666 3.33333H5.33325C4.96506 3.33333 4.66659 3.63181 4.66659 4V6.66667C4.66659 8.50762 6.15897 10 7.99992 10C9.84087 10 11.3333 8.50762 11.3333 6.66667V4C11.3333 3.63181 11.0348 3.33333 10.6666 3.33333ZM5.33325 2C4.22868 2 3.33325 2.89543 3.33325 4V6.66667C3.33325 9.244 5.42259 11.3333 7.99992 11.3333C10.5772 11.3333 12.6666 9.244 12.6666 6.66667V4C12.6666 2.89543 11.7712 2 10.6666 2H5.33325Z"
                fill="#E9E9E9"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.666748 5.33337C0.666748 4.2288 1.56218 3.33337 2.66675 3.33337H4.66675V8.66671H3.33341C1.86066 8.66671 0.666748 7.4728 0.666748 6.00004V5.33337ZM2.66675 4.66671H3.33341V7.33337C2.59703 7.33337 2.00008 6.73642 2.00008 6.00004V5.33337C2.00008 4.96518 2.29856 4.66671 2.66675 4.66671Z"
                fill="#E9E9E9"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3334 5.33337C15.3334 4.2288 14.438 3.33337 13.3334 3.33337H11.3334V8.66671H12.6667C14.1395 8.66671 15.3334 7.4728 15.3334 6.00004V5.33337ZM13.3334 4.66671H12.6667V7.33337C13.4031 7.33337 14.0001 6.73642 14.0001 6.00004V5.33337C14.0001 4.96518 13.7016 4.66671 13.3334 4.66671Z"
                fill="#E9E9E9"
            />
            <path
                d="M7.99992 10C7.63173 10 7.33325 10.2985 7.33325 10.6667V12.6667H5.99992C5.63173 12.6667 5.33325 12.9651 5.33325 13.3333C5.33325 13.7015 5.63173 14 5.99992 14H9.99992C10.3681 14 10.6666 13.7015 10.6666 13.3333C10.6666 12.9651 10.3681 12.6667 9.99992 12.6667H8.66659V10.6667C8.66659 10.2985 8.36811 10 7.99992 10Z"
                fill="#E9E9E9"
            />
        </svg>
    );
}
