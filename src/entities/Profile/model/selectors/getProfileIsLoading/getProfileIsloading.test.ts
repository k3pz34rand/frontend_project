import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('getProfileIsLoading with loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: true },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('getProfileIsLoading with loading false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: false },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
    test('getProfileIsLoading without loading state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
