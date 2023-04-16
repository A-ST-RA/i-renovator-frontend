import { Meta, StoryObj } from '@storybook/react';

import Title from '.';

const meta: Meta<typeof Title> = {
    title: 'ui/Title',
    component: Title,
};

const initTitleText = 'Some title';

type Story = StoryObj<typeof Title>;

export const Heading1: Story = {
    args: {
        title: initTitleText,
        level: 1,
    },
};

export const Heading2: Story = {
    args: {
        title: initTitleText,
        level: 2,
    },
};

export const Heading3: Story = {
    args: {
        title: initTitleText,
        level: 3,
    },
};

export const Heading4: Story = {
    args: {
        title: initTitleText,
        level: 4,
    },
};

export const Heading5: Story = {
    args: {
        title: initTitleText,
        level: 6,
    },
};

export const Heading6: Story = {
    args: {
        title: initTitleText,
        level: 6,
    },
};

export default meta;
