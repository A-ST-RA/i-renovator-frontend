import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import cn from './style.module.sass';

export enum ButtonType {
    Normal = 'normal',
    Bordered = 'bordered',
    Circled = 'circled',
    WhiteSpace = 'whitespace',
}

interface IButtonProps {
    text?: string;
    onClick?: (e: unknown) => void;
    icon?: string;
    isSubmit?: boolean;
    buttonType?: ButtonType;
    customClass?: string;
}

function Button({ text, onClick, isSubmit = false, buttonType, icon, customClass }: IButtonProps) {
    if ((buttonType === ButtonType.Circled || buttonType === ButtonType.WhiteSpace) && icon) {
        return (
            <button
                type={isSubmit ? 'submit' : 'button'}
                className={clsx(
                    cn.button,
                    buttonType === ButtonType.Circled && cn.circled,
                    buttonType === ButtonType.WhiteSpace && cn.whitespace,
                    customClass
                )}
                onClick={onClick}
            >
                <Image src={icon} alt={icon} width={24} height={24} />
            </button>
        );
    }

    return (
        <button
            type={isSubmit ? 'submit' : 'button'}
            className={clsx(
                cn.button,
                buttonType === ButtonType.Bordered && cn.bordered,
                customClass
            )}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
