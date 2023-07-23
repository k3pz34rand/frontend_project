import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.tets', () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 },
    };
    test('should return counter value', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
