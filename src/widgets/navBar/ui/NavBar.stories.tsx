import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'widget/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Ligth: Story = {
    args: {
        className: '',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
export const Dark: Story = {
    args: {
        className: '',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
