/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

import Button, { ButtonType } from '@/components/shared/ui/button';
import Card, { CardType } from '@/components/shared/ui/card';
import TopRating from '@/components/shared/ui/top-rating';
import numberedWords from '@/components/shared/utilities/NumberedWords';
import numberWithSpaces from '@/components/shared/utilities/NumberWithSpaces';

import cn from './style.module.sass';

interface IProjectCardProps {
    rankPlace: number;
    project: {
        votingImage: string;
        votingDetailsName: string;
        votingDetailsId: string;
        amountOfVotes: number;
    };
}

const nineteenVotes = 90000;

export default function ProjectCard({ rankPlace, project }: IProjectCardProps) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const likes = JSON.parse(localStorage.getItem('likes') || '[]') as string[];
        if (likes.includes(project.votingDetailsId)) {
            setIsLiked(true);
        }
    }, []);

    const sumOfVotes = useMemo(
        () =>
            project.amountOfVotes < nineteenVotes
                ? numberWithSpaces(project.amountOfVotes)
                : 'Более 90 000',
        [project.amountOfVotes]
    );
    const votesText = useMemo(
        () =>
            project.amountOfVotes >= nineteenVotes
                ? 'голосов'
                : numberedWords(project.amountOfVotes, ['голос', 'голоса', 'голосов']),
        [project.amountOfVotes]
    );

    const vote = (id: string) => {
        const likes = JSON.parse(localStorage.getItem('likes') || '[]') as string[];
        localStorage.setItem('likes', JSON.stringify([...new Set([...likes, id])]));
        setIsLiked(true);
    };

    return (
        <Card
            type={CardType.Plain}
            customClass={cn.topAuthorCard}
            style={{ background: `url(${project.votingImage}) center no-repeat` }}
        >
            <div className={cn.rankPlace}>
                <TopRating rankPlace={rankPlace} />
                <Button
                    icon={isLiked ? '/images/svg/like.svg' : '/images/svg/like-grey.svg'}
                    buttonType={ButtonType.WhiteSpace}
                    customClass={clsx(isLiked && cn.liked, cn.particle)}
                    onClick={() => vote(project.votingDetailsId)}
                />
            </div>
            <div className={cn.authorDetails}>
                <div className={cn.authorInfo}>
                    <div>
                        <Link href={`projects/${project.votingDetailsId}`}>
                            {project.votingDetailsName}
                        </Link>
                    </div>
                    <div className={cn.votesAmount}>
                        {sumOfVotes} <span className={cn.votesAmountText}>{votesText}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
