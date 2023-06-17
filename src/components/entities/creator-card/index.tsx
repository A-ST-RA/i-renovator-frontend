// TODO: FIX THIS
/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import Avatar from '@/components/shared/ui/avatar';
import Card, { CardType } from '@/components/shared/ui/card';

import cn from './style.module.sass';

export interface ICreatorProps {
    imgSrc: string;
    name: string;
    id: string;
    description: string;
    websiteLink: string;
    vkLink: string;
    tgLink: string;
    ytLink: string;
    registeredAt: Date;
}

function CreatorCard({ imgSrc, name }: ICreatorProps) {
    return (
        <Card type={CardType.Bordered} customClass={cn.creatorCard}>
            <Avatar customClass={cn.avatar} imgSrc={imgSrc} name={name} />
        </Card>
    );
}

export default CreatorCard;
