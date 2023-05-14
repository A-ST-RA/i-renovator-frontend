import { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const meta: Meta<typeof Header> = {
    title: 'widgets/Header',
    component: Header,
};

type Story = StoryObj<typeof Header>;

export const Index: Story = {};

export default meta;
