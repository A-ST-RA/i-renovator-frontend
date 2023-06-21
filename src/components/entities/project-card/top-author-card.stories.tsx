import { Meta, StoryObj } from '@storybook/react';

import ProjectCard from '.';

const meta: Meta<typeof ProjectCard> = {
    title: 'entites/Project Card',
    component: ProjectCard,
};

type Story = StoryObj<typeof ProjectCard>;

export const Index: Story = {
    args: {
        rankPlace: 1,
        project: {
            id: 'dfsdfjshdfksdfh-sjkdfjsdhfksdhfj-sdfksjdfhjksdhfjksdhf',
            imgSrc: 'https://img.freepik.com/free-photo/blank-billboard-on-bus-stop-shelter-at-night_23-2147873358.jpg?w=1380&t=st=1687375988~exp=1687376588~hmac=de00443da811b08182ec61449ffdc6a3519759dbc634b10034c3d45bf2cf926b',
            name: 'Остановка',
            sumVotesAmount: 1231,
        }
    }
};

export default meta;
