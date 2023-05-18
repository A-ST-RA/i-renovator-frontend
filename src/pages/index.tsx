import React from 'react';

import VotingCardInfo from '@/components/entities/voting-card-info';

function IndexPage() {
    return (
        <VotingCardInfo amountOfVotes={12900} dateOfEndVoting={new Date(2023, 5, 16).toString()} />
    );
}

export default IndexPage;
