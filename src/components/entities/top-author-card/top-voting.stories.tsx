import { Meta, StoryObj } from '@storybook/react';

import TopAuthorCard from '.';

const meta: Meta<typeof TopAuthorCard> = {
    title: 'entites/Top Author Card',
    component: TopAuthorCard,
};

type Story = StoryObj<typeof TopAuthorCard>;

export const Index: Story = {};

export default meta;
