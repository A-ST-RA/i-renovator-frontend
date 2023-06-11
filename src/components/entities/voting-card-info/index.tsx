/* eslint-disable no-magic-numbers */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import countDownTimeLeft from '@/components/shared/utilities/CountDownTimeLeft';
import numberWithSpaces from '@/components/shared/utilities/NumberWithSpaces';

import Card, { CardType } from '../../shared/ui/card';
import cn from './style.module.sass';

export interface VotingCardInfoProps {
    amountOfVotes: number;
    dateOfEndVoting: string;
    customClass?: string;
}

function VotingCardInfo({ amountOfVotes, dateOfEndVoting, customClass }: VotingCardInfoProps) {
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    // TODO: Вынести голосовалку отсюда, это ж бизнес логика
    useEffect(() => {
        const processedDateOfVoting = new Date(dateOfEndVoting);

        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = processedDateOfVoting.getTime() - now;
            const [hours, minutes, seconds] = countDownTimeLeft(timeLeft);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [dateOfEndVoting]);

    return (
        <Card customClass={clsx(cn.votingCardInfo, customClass)} type={CardType.Bordered}>
            <div className={cn.votesData}>
                <div className={cn.amountOfVotesText}>Уже оценило:</div>
                <div className={cn.amountOfVotes}>{numberWithSpaces(amountOfVotes)}</div>
                <div className={cn.peoples}>Человек</div>
            </div>
            <div className={cn.endOfVoteText}>Голосование закончится через:</div>
            <div className={cn.endOfVoteTime}>
                <span>
                    <div className={cn.endOfVoteSegmentTime}>{hours}</div>
                    <div className={cn.endOfVoteSegmentType}>часов</div>
                </span>
                <span>
                    <div className={cn.endOfVoteSegmentTime}>{minutes}</div>
                    <div className={cn.endOfVoteSegmentType}>минут</div>
                </span>
                <span>
                    <div className={cn.endOfVoteSegmentTime}>{seconds}</div>
                    <div className={cn.endOfVoteSegmentType}>секунды</div>
                </span>
            </div>
        </Card>
    );
}

export default VotingCardInfo;
