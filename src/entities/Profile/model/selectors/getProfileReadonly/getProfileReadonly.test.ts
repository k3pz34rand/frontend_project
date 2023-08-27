import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('getProfileReadonly with readonly true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readOnly: true },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('getProfileReadonly with readonly false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readOnly: false },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });
    test('getProfileReadonly without readonly state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
