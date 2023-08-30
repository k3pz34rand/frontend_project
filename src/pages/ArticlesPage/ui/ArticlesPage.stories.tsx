import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'page/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Ligth: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
