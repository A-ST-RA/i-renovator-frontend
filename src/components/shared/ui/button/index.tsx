import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import cn from './style.module.sass';

export enum ButtonType {
    Normal = 'normal',
    Bordered = 'bordered',
    Link = 'link',
}

interface IButtonProps {
    text: string;
    onClick: (e: unknown) => void;
    url?: string;
    isSubmit?: boolean;
    buttonType?: ButtonType;
}

function Button({ text, onClick, url, isSubmit = false, buttonType }: IButtonProps) {
    if (buttonType === ButtonType.Link && url) {
        return <Link className={clsx(cn.button)} href={url} about="_blank" />;
    }

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
