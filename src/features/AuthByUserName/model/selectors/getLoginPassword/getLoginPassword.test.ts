import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('getLoginPassword with password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'somepassword',
                username: '',
                isLoading: false,
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('somepassword');
    });
    test('getLoginPassword without password', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
