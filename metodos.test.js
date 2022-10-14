import { myLength, myPush, myIndexOf, myUnShift } from './index.js';

describe('Given mylength function', () => {
    test(`when parametres are  length, then should be 4`, () => {
        const array = [1, 2, 3, 4];
        const result = myLength(array);
        const expectedResult = 4;
        expect(result).toBe(expectedResult);
    });
    test ('is array is not a array throw a error',() => {
        const string = 'pepe';
        try {
            myLength(string);
        }catch (e){
            expect(e.message).toBe(
                'Error, it is not a array'
            )
        }
    }
    )
});



describe('Given myPush function', () => {

    test(`when parametres are  element, then should be arrayTwo `, () => {
        const arrayTwo = [1, 2, 3, 4];
        let element= 6
        ;
        const result = myPush(arrayTwo,element);
        const expectedResult = 5;
        expect(result).toBe(expectedResult);
    });
})

describe('Given indexof function', () => {
    test(`when parametres are  element, then should be arrayTwo `, () => {
        let array = [1, 2, 3, 4, 5];
        let element= 2;
        const result = myIndexOf(array,element);
        expect(result).toBe(1);
    });

    test(`when the element is not inside of the array `, () => {
        const array = [1, 2, 3, 4];
        const element = 'Pepe';
        const expectedResult = -1;
        const result = myIndexOf(array, element);
        expect(result).toBe(expectedResult);
    });
})

describe('Given unShift function', () => {

test(`when parametres are  element, then should be arrayTwo `, () => {
        let array = [1, 2, 3, 4];
        let element= 9;
        const result = myUnShift(array, element);
       
        expect(result).toBe(5);
    });
})
