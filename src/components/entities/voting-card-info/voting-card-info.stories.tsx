import { Meta, StoryObj } from '@storybook/react';

import VotingCardInfo from '.';

const meta: Meta<typeof VotingCardInfo> = {
    title: 'entites/Voting Card Info',
    component: VotingCardInfo,
};

type Story = StoryObj<typeof VotingCardInfo>;

export const Index: Story = {
    args: {
        amountOfVotes: 29000,
        dateOfEndVoting: new Date(2023, 5, 16).toString(),
    }
};

export default meta;
