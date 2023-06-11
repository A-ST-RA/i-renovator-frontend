import { Meta, StoryObj } from '@storybook/react';

import Card, { CardType } from '.';

const meta: Meta<typeof Card> = {
    title: 'ui/Сard',
    component: Card,
};

type Story = StoryObj<typeof Card>;

export const Index: Story = {
    args: {
        type: CardType.Plain,
    },
};

export default meta;
