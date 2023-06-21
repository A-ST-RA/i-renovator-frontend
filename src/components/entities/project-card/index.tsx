import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

import Button, { ButtonType } from '@/components/shared/ui/button';
import Card, { CardType } from '@/components/shared/ui/card';
import TopRating from '@/components/shared/ui/top-rating';
import numberedWords from '@/components/shared/utilities/NumberedWords';
import numberWithSpaces from '@/components/shared/utilities/NumberWithSpaces';

import cn from './style.module.sass';

interface IProjectCardProps {
    rankPlace: number;
    project: {
        imgSrc: string;
        name: string;
        id: string;
        sumVotesAmount: number;
    };
}

const nineteenVotes = 90000;

export default function ProjectCard({ rankPlace, project }: IProjectCardProps) {
    const [isLiked, setIsLiked] = useState(false);

    const sumOfVotes = useMemo(
        () =>
            project.sumVotesAmount < nineteenVotes
                ? numberWithSpaces(project.sumVotesAmount)
                : 'Более 90 000',
        [project.sumVotesAmount]
    );
    const votesText = useMemo(
        () =>
            project.sumVotesAmount >= nineteenVotes
                ? 'голосов'
                : numberedWords(project.sumVotesAmount, ['голос', 'голоса', 'голосов']),
        [project.sumVotesAmount]
    );

    return (
        <Card
            type={CardType.Plain}
            customClass={cn.topAuthorCard}
            style={{ background: `url(${project.imgSrc}) center no-repeat` }}
        >
            <div className={cn.rankPlace}>
                <TopRating rankPlace={rankPlace} />
                <Button
                    icon={isLiked ? '/images/svg/like.svg' : '/images/svg/like-grey.svg'}
                    buttonType={ButtonType.WhiteSpace}
                    customClass={clsx(isLiked && cn.liked, cn.particle)}
                    onClick={() => setIsLiked(prev => !prev)}
                />
            </div>
            <div className={cn.authorDetails}>
                <div className={cn.authorInfo}>
                    <div>{project.name}</div>
                    <div className={cn.votesAmount}>
                        {sumOfVotes} <span className={cn.votesAmountText}>{votesText}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
