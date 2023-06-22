/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable lodash/prefer-noop */
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import ProfileInfo, { ProfileInfoProps } from '@/components/entities/profile-info';
import VotingCardInfo from '@/components/entities/voting-card-info';
import Button, { ButtonType } from '@/components/shared/ui/button';
import Title from '@/components/shared/ui/title';

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
            <Title level={2} title="Экспресс проект" customClass={cn.expressProject} />
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
                            onClick={() => {}}
                        />
                        <Button
                            text="подробнее"
                            buttonType={ButtonType.Bordered}
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopVoting;
