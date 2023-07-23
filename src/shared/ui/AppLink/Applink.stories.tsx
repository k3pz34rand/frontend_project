import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'ui/Applink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AppLink>;

export const LigthPrimary: Story = {
    args: {
        className: '',
        children: 'link',
        to: '/',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
export const LigthInverted: Story = {
    args: {
        className: '',
        children: 'link',
        to: '/',
        theme: AppLinkTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
export const DarkPrimary: Story = {
    args: {
        className: '',
        children: 'link',
        to: '/',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const DarkInverted: Story = {
    args: {
        className: '',
        children: 'link',
        to: '/',
        theme: AppLinkTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
