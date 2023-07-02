import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof LangSwitcher>;

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
