import Link from 'next/link';
import React from 'react';

import Avatar from '../../shared/ui/avatar';
import cn from './style.module.sass';

export interface ProfileInfoProps {
    imgSrc: string;
    name: string;
    id: string;
}

function ProfileInfo({ imgSrc, name, id }: ProfileInfoProps) {
    return (
        <div className={cn.profileInfo}>
            <Avatar imgSrc={imgSrc} name={name} />
            <div className={cn.details}>
                <div className={cn.creator}>Создатель</div>
                <Link className={cn.name} href={`/author/${id}`}>
                    {name}
                </Link>
            </div>
        </div>
    );
}

export default ProfileInfo;
