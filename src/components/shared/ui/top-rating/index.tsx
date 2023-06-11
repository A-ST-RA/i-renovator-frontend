import clsx from 'clsx';
import React from 'react';

import CupSvg from './cup';
import cn from './style.module.sass';

interface ITopRatingProps {
    rankPlace: number;
}

export default function TopRating({ rankPlace }: ITopRatingProps) {
    return (
        <span className={clsx(cn.topRating, cn[`top${rankPlace}`])}>
            <CupSvg className={cn.cup} />{' '}
            <span>
                <span className={cn.number}>#</span>
                {rankPlace}
            </span>
        </span>
    );
}
