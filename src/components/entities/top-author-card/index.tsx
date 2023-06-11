import React from 'react';

import Card, { CardType } from '@/components/shared/ui/card';

import cn from './style.module.sass';

export default function TopAuthorCard() {
    return (
        <Card type={CardType.Plain} customClass={cn.topAuthorCard}>
            WIP
        </Card>
    );
}
