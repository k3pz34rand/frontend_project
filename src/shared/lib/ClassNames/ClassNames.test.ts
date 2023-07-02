import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

describe('ClassNames', () => {
    test('Classname with cls', () => {
        const expected = 'string';
        expect(ClassNames('string')).toBe(expected);
    });
    test('Classname with cls, additionaly', () => {
        const expected = 'string cl1 cl2';
        expect(ClassNames('string', {}, ['cl1', 'cl2'])).toBe(expected);
    });
    test('Classname with cls, mods, additionaly', () => {
        const expected = 'string collapsed cl1 cl2';
        expect(
            ClassNames('string', { collapsed: true, disabled: false }, [
                'cl1',
                'cl2',
            ])
        ).toBe(expected);
    });
    test('Classname with mods undefiend', () => {
        const expected = '';
        expect(ClassNames('', { collapsed: undefined, disabled: false })).toBe(
            expected
        );
    });
});
