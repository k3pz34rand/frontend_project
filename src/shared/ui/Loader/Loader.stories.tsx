import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'ui/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Loader>;

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
