import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'page/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
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
        }),
    ],
};
export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Ligth: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGTH)],
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
