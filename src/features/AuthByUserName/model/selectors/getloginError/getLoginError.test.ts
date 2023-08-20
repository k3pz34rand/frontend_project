import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('getLoginError with error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                username: '',
                password: '',
                isLoading: false,
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('getLoginError without error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
