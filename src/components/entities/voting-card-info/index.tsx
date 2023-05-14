import React from 'react';

import numberWithSpaces from '@/components/shared/utilities/NumberWithSpaces';

import Card, { CardType } from '../../shared/ui/card';
import cn from './style.module.sass';

interface VotingCardInfoProps {
    amountOfVotes: number;
    // dateOfEndVoting: Date;
}

function VotingCardInfo({ amountOfVotes }: VotingCardInfoProps) {
    // TODO: implement dateOfEndVoting

    return (
        <Card customClass={cn.votingCardInfo} type={CardType.Bordered}>
            <div className={cn.votesData}>
                <div className={cn.amountOfVotesText}>Уже оценило:</div>
                <div className={cn.amountOfVotes}>{numberWithSpaces(amountOfVotes)}</div>
                <div className={cn.peoples}>Человек</div>
            </div>
            <div className={cn.endOfVoteText}>Голосование закончится через:</div>
            <div className={cn.endOfVoteTime}>
                <span>
                    <div className={cn.endOfVoteSegmentTime}>19</div>
                    <div className={cn.endOfVoteSegmentType}>часов</div>
                </span>
                <span>
                    <div className={cn.endOfVoteSegmentTime}>18</div>
                    <div className={cn.endOfVoteSegmentType}>минут</div>
                </span>
                <span>
                    <div className={cn.endOfVoteSegmentTime}>33</div>
                    <div className={cn.endOfVoteSegmentType}>секунды</div>
                </span>
            </div>
        </Card>
    );
}

export default VotingCardInfo;
