import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import { AvatarImg } from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'ui/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        alt: 'avatar img',
    },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Midle: Story = {
    args: {
        size: 150,
        src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const Small: Story = {
    args: {
        size: 50,
        src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
