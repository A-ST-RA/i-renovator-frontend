import { Meta, StoryObj } from '@storybook/react';

import TopAuthorsList from './index';

const meta: Meta<typeof TopAuthorsList> = {
    title: 'widgets/Top Authors List',
    component: TopAuthorsList,
};

type Story = StoryObj<typeof TopAuthorsList>;

export const Index: Story = {};

export default meta;
