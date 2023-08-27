import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('getProfileError with state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'some error' },
        };
        expect(getProfileError(state as StateSchema)).toEqual('some error');
    });
    test('getProfileData without empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
