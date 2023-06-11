import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import cn from './style.module.sass';

export enum ButtonType {
    Normal = 'normal',
    Bordered = 'bordered',
    Link = 'link',
    Circled = 'circled',
}

interface IButtonProps {
    text: string;
    onClick: (e: unknown) => void;
    icon?: string;
    url?: string;
    isSubmit?: boolean;
    buttonType?: ButtonType;
    customClass?: string;
}

function Button({
    text,
    onClick,
    url,
    isSubmit = false,
    buttonType,
    icon,
    customClass,
}: IButtonProps) {
    if (buttonType === ButtonType.Link && url) {
        return <Link className={clsx(cn.button)} href={url} about="_blank" />;
    }

    if (buttonType === ButtonType.Circled && icon) {
        return (
            <button
                className={clsx(cn.button, cn.circled, customClass)}
                type={isSubmit ? 'submit' : 'button'}
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
