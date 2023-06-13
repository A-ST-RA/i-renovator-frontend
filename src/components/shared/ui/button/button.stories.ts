import { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonType } from '.';

const meta: Meta<typeof Button> = {
    title: 'ui/Button',
    component: Button,
    argTypes: {
        icon: {
            name: 'icon',
            type: 'string',
        },
    },
};

type Story = StoryObj<typeof Button>;

const sampleText = 'Тестовый текст на кнопке';

export const Index: Story = {
    args: {
        text: sampleText,
    },
};

export const Bordered: Story = {
    args: {
        // icon: '/Mock-Heart.svg',
        text: sampleText,
        buttonType: ButtonType.Bordered,
    },
};

export default meta;
