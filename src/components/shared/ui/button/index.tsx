import clsx from 'clsx';
import React from 'react';

import cn from './style.module.sass';

export enum ButtonType {
    Normal = 'normal',
    Bordered = 'bordered',
}

interface IButtonProps {
    text: string;
    onClick: (e: unknown) => void;
    isSubmit?: boolean;
    buttonType?: ButtonType;
}

function Button({ text, onClick, isSubmit = false, buttonType }: IButtonProps) {
    return (
        <button
            className={clsx(cn.button, buttonType === ButtonType.Bordered && cn.bordered)}
            type={isSubmit ? 'submit' : 'button'}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
