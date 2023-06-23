/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import cn from './style.module.sass';

interface IInputProps {
    placeholder?: string;
    onChange?: (e: any) => void;
    name?: string;
    type?: string;
    rest?: { [p: string]: unknown };
}

function Input({ placeholder = 'Введите текст', onChange, name, type, ...rest }: IInputProps) {
    return (
        <input
            name={name}
            className={cn.input}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            {...rest}
        />
    );
}

export default Input;
