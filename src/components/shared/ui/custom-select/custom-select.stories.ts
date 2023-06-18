import { Meta, StoryObj } from '@storybook/react';

import CustomSelect from '.';

const meta: Meta<typeof CustomSelect> = {
    title: 'ui/Custom Select',
    component: CustomSelect,
};

type Story = StoryObj<typeof CustomSelect>;

export const Index: Story = {
    args: {
        options: [
            {
                label: 'Ростов-на-Дону',
                value: 'rnd',
            },
            {
                label: 'Геленджик',
                value: 'glk',
            },
            {
                label: 'Красснодар',
                value: 'krd',
            },
        ],
    },
};

export const NoOptions: Story = {
    args: {
        options: [],
    },
};

export const CustomPlaceholder: Story = {
    args: {
        options: [
            {
                label: 'Новичек',
                value: 'data1',
            },
            {
                label: 'Средний',
                value: 'data2',
            },
            {
                label: 'Опытный',
                value: 'data3',
            },
        ],
        placeholder: 'Выберете ваш уровень',
    },
};

export default meta;
