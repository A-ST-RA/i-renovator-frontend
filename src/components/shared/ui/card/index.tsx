import clsx from 'clsx';
import React, { ReactNode } from 'react';

import cn from './style.module.sass';

enum CardType {
    Bordered = 'bordered',
    Plain = 'plain',
}

interface CardProps {
    children: ReactNode;
    type: CardType;
}

function Card({ children, type }: CardProps) {
    return (
        <div className={clsx(cn.card, type === CardType.Bordered && cn.bordered)}>{children}</div>
    );
}

export default Card;
