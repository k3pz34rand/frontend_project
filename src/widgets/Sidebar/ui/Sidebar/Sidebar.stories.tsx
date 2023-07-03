import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

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
