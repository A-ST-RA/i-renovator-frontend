import React, { useMemo } from 'react';

import Avatar from '@/components/shared/ui/avatar';
import Card, { CardType } from '@/components/shared/ui/card';
import TopRating from '@/components/shared/ui/top-rating';
import numberedWords from '@/components/shared/utilities/NumberedWords';
import numberWithSpaces from '@/components/shared/utilities/NumberWithSpaces';

import cn from './style.module.sass';

interface ITopAuthorCardProps {
    rankPlace: number;
    author: {
        imgSrc: string;
        name: string;
        id: string;
        sumVotesAmount: number;
    };
}

export default function TopAuthorCard({ rankPlace, author }: ITopAuthorCardProps) {
    const sumOfVotes = useMemo(
        () =>
            author.sumVotesAmount < 90000
                ? numberWithSpaces(author.sumVotesAmount)
                : 'Более 90 000',
        [author.sumVotesAmount]
    );
    const votesText = useMemo(
        () =>
            author.sumVotesAmount >= 90000
                ? 'голосов'
                : numberedWords(author.sumVotesAmount, ['голос', 'голоса', 'голосов']),
        [author.sumVotesAmount]
    );

    return (
        <Card type={CardType.Plain} customClass={cn.topAuthorCard}>
            <div className={cn.rankPlace}>
                <TopRating rankPlace={rankPlace} />
            </div>
            <div className={cn.authorDetails}>
                <Avatar imgSrc={author.imgSrc} name={author.name} customClass={cn.avatar} />
                <div className={cn.authorInfo}>
                    <div>{author.name}</div>
                    <div className={cn.votesAmount}>
                        {sumOfVotes} <span className={cn.votesAmountText}>{votesText}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
