import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'ui/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Select>;

export const select: Story = {
    args: {
        label: 'select header',
        options: [
            { value: 'value 1', content: 'value 1' },
            { value: 'value 2', content: 'value 2' },
            { value: 'value 3', content: 'value 3' },
        ],
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
