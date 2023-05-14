import Image from 'next/image';
import React from 'react';

import cn from './style.module.sass';

interface AvatarProps {
    imgSrc: string;
    name: string;
}

function Avatar({ imgSrc, name }: AvatarProps) {
    return <Image className={cn.avatar} alt={name} src={imgSrc} width={40} height={40} />;
}

export default Avatar;
