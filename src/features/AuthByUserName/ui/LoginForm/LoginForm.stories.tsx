import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const LigthInput: Story = {
    args: {
        className: '',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const DarkInput: Story = {
    args: {
        className: '',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
