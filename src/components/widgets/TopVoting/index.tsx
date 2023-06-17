/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable lodash/prefer-noop */
import Image from 'next/image';
import React from 'react';

import ProfileInfo, { ProfileInfoProps } from '@/components/entities/profile-info';
import VotingCardInfo from '@/components/entities/voting-card-info';
import Button, { ButtonType } from '@/components/shared/ui/button';

import cn from './style.module.sass';

export interface TopVotingProps {
    votingImage: string;

    amountOfVotes: number;

    dateOfEndVoting: string;

    votingDetailsId: number;

    votingDetailsName: string;

    creator: ProfileInfoProps;
}

function TopVoting({
    votingDetailsId,
    votingImage,
    dateOfEndVoting,
    amountOfVotes,
    votingDetailsName,
    creator,
}: TopVotingProps) {
    return (
        <div className={cn.topVoting}>
            <Image
                className={cn.image}
                alt={votingDetailsId.toString()}
                src={votingImage}
                width={640}
                height={800}
            />
            <div className={cn.details}>
                <div className={cn.nameAndCreator}>
                    <div className={cn.title}>{votingDetailsName}</div>
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
                        onClick={() => {}}
                    />
                    <Button text="подробнее" buttonType={ButtonType.Bordered} onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}

export default TopVoting;