import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('getProfileForm with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
    test('getProfileForm with form', () => {
        const form = {
            first: 'Petr',
            lastname: 'Ivanov',
            age: 18,
            currency: Currency.EUR,
            country: Country.Armenia,
            city: 'Erevan',
        };
        const state: DeepPartial<StateSchema> = { profile: { form } };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
});
