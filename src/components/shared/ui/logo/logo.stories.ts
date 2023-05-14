import { Meta, StoryObj } from '@storybook/react';

import Logo from '.';

const meta: Meta<typeof Logo> = {
    title: 'ui/Logo',
    component: Logo,
};

type Story = StoryObj<typeof Logo>;

export const Index: Story = {};

export default meta;
