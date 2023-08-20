import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('getLoginUsername with username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '',
                username: 'Username',
                isLoading: false,
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('Username');
    });
    test('getLoginUsername without username', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
