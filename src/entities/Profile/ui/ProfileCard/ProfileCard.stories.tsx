import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Data: Story = {
    args: {
        data: {
            first: 'Petr',
            lastname: 'Ivanov',
            age: 18,
            currency: Currency.EUR,
            country: Country.Armenia,
            city: 'Erevan',
            username: 'IvanovPetya2004',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const Error: Story = {
    args: {
        error: 'error',
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
