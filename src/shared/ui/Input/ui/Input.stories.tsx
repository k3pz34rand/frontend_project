import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'ui/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const LigthInput: Story = {
    args: {
        placeholder: 'username',
        value: 'randomUser',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const DarkInput: Story = {
    args: {
        placeholder: 'username',
        value: 'randomUser',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
