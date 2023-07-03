import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'ui/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultLigth: Story = {
    args: {
        children: 'text',
        className: '',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
export const DefaultDark: Story = {
    args: {
        children: 'text',
        className: '',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearLigth: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const ClearDark: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineLigth: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const OutlineDark: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
