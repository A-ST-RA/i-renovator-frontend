/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable lodash/prefer-noop */
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import ProfileInfo, { ProfileInfoProps } from '@/components/entities/profile-info';
import VotingCardInfo from '@/components/entities/voting-card-info';
import useLike from '@/components/shared/hooks/use-liked';
import Button, { ButtonType } from '@/components/shared/ui/button';
import Title from '@/components/shared/ui/title';

import cn from './style.module.sass';

export interface TopVotingProps {
    votingImage: string;

    amountOfVotes: number;

    dateOfEndVoting: string;

    votingDetailsId: string;

    votingDetailsName: string;

    creator: ProfileInfoProps;

    customTitle?: string;
}

function TopVoting({
    votingDetailsId,
    votingImage,
    dateOfEndVoting,
    amountOfVotes,
    votingDetailsName,
    creator,
    customTitle = 'Экспресс проект',
}: TopVotingProps) {
    const { isLiked, vote } = useLike(votingDetailsId);

    const customVote = () => {
        if (isLiked) {
            alert('Вы уже проголосовали за данный проект');
            return;
        }

        vote();
        alert('Спасибо, ваш голос учтен!');
    };

    return (
        <div className={cn.topVoting}>
            <Title level={2} title={customTitle} customClass={cn.expressProject} />
            <div className={clsx(cn.title, cn.mobile)}>{votingDetailsName}</div>
            <div className={cn.content}>
                <Image
                    className={cn.image}
                    alt={votingDetailsId.toString()}
                    src={votingImage}
                    width={600}
                    height={800}
                />
                <div className={cn.details}>
                    <div className={cn.nameAndCreator}>
                        <div className={clsx(cn.title, cn.desktop)}>{votingDetailsName}</div>
                        <ProfileInfo imgSrc={creator.imgSrc} name={creator.name} id={creator.id} />
                    </div>
                    <VotingCardInfo
                        customClass={cn.votingCardInfo}
                        amountOfVotes={amountOfVotes}
                        dateOfEndVoting={dateOfEndVoting}
                    />
                    <div className={cn.buttons}>
                        <Button
                            customClass={cn.voteButton}
                            text="голосовать"
                            buttonType={ButtonType.Normal}
                            onClick={customVote}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopVoting;
