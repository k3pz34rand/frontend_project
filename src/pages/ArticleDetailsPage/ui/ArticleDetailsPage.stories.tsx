import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'page/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>;

export const Ligth: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
