import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
    title: 'widget/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const LigthWithoutLogin: Story = {
    args: {
        className: '',
    },
    decorators: [ThemeDecorator(Theme.LIGTH), StoreDecorator({})],
};
export const DarkWithoutLogin: Story = {
    args: {
        className: '',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LigthAfterLogin: Story = {
    args: {
        className: '',
    },
    decorators: [
        ThemeDecorator(Theme.LIGTH),
        StoreDecorator({ user: { authData: {} } }),
    ],
};
export const DarkAfterLogin: Story = {
    args: {
        className: '',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({ user: { authData: {} } }),
    ],
};
