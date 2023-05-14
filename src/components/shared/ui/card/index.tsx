import clsx from 'clsx';
import React, { ReactNode } from 'react';

import cn from './style.module.sass';

export enum CardType {
    Bordered = 'bordered',
    Plain = 'plain',
}

interface CardProps {
    children: ReactNode;
    type: CardType;
    customClass?: string;
}

function Card({ children, type, customClass }: CardProps) {
    return (
        <div className={clsx(cn.card, type === CardType.Bordered && cn.bordered, customClass)}>
            {children}
        </div>
    );
}

export default Card;
