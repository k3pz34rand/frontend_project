import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'ui/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultLigth: Story = {
    args: {
        children: 'text',
        className: '',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
export const DefaultDark: Story = {
    args: {
        children: 'text',
        className: '',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearLigth: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const ClearDark: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineLigth: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const OutlineDark: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDarkSizeM: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDarkSizeL: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDarkSizeXL: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundThemLigth: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const BackgroundThemDark: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const InvertedBackgroundThemLigth: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const InvertedBackgroundThemDark: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareButtonSizeM: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareButtonSizeL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareButtonSizeXL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disablet: Story = {
    args: {
        children: 'сохранить',
        theme: ThemeButton.OUTLINE,
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
