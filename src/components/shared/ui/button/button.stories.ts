import { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonType } from '.';

const meta: Meta<typeof Button> = {
    title: 'ui/Button',
    component: Button,
};

type Story = StoryObj<typeof Button>;

export const Index: Story = {
    args: {
        text: 'Тестовый текст на кнопке',
    },
};

export const Link: Story = {
    args: {
        url: '#',
        buttonType: ButtonType.Link,
        text: 'Тестовый текст на кнопке',
    },
};

export default meta;
