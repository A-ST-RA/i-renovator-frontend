import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import cn from './style.module.sass';

interface AvatarProps {
    imgSrc: string;
    name: string;
    customClass?: string;
}

function Avatar({ imgSrc, name, customClass }: AvatarProps) {
    return (
        <Image
            className={clsx(cn.avatar, customClass)}
            alt={name}
            src={imgSrc}
            width={40}
            height={40}
        />
    );
}

export default Avatar;
