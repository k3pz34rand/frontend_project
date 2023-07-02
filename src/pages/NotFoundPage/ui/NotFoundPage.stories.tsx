import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'page/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AppLink>;

export const Ligth: Story = {
    args: { className: '' },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const Dark: Story = {
    args: { className: '' },
    decorators: [ThemeDecorator(Theme.DARK)],
};
