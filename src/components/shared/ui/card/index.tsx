import clsx from 'clsx';
import React, { CSSProperties, ReactNode } from 'react';

import cn from './style.module.sass';

export enum CardType {
    Bordered = 'bordered',
    Plain = 'plain',
}

interface CardProps {
    children: ReactNode;
    type: CardType;
    customClass?: string;
    style?: CSSProperties;
}

function Card({ children, type, customClass, style }: CardProps) {
    return (
        <div
            style={style}
            className={clsx(
                cn.card,
                cn.plain,
                type === CardType.Bordered && cn.bordered,
                customClass
            )}
        >
            {children}
        </div>
    );
}

export default Card;
