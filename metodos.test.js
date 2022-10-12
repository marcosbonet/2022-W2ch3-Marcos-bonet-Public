import { myLength, myPush, myIndexOf } from './index.js';

describe('Given mylength function', () => {
    test(`when parametres are  length, then should be 4`, () => {
        const array = [1, 2, 3, 4];
        const result = myLength(array);
        const expectedResult = 4;
        expect(result).toBe(expectedResult);
    });
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

describe('Given myPush function', () => {
    test(`when parametres are  element, then should be arrayTwo `, () => {
        let array = [1, 2, 3, 4, 5];
        let element= 4;
        const result = myIndexOf(array,element);
        expect(result).toBe(3);
    });
})

// describe('Given unShift function', () => {

//     test(`when parametres are  element, then should be arrayTwo `, () => {
//         let array = [1, 2, 3, 4];
//         let element= 9;
//         const result = unShift (array,element);
       
//         expect(result).toBe(5);
//     });
// })
