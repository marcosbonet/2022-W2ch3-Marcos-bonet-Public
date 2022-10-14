//export function myLength(array) {
//    //const zeroError = new Error('Error, it is not a array');
//    let count = 0;
//    // if (!Array.isArray(array)) {
//    //   throw zeroError;
//    //}
//
//    for (let i = 0; array[i] !== undefined; i++) {
//        count += 1;
//    }
//    return count;
//}
//export function myPush(arrayTwo, element) {
//    arrayTwo[myLength(arrayTwo)] = element;
//
//    return myLength(arrayTwo);
//}
//
//export function myIndexOf(array, element) {
//    for (let i = 0; i < array.length; i++) {
//        if (array[i] === element) {
//            return i;
//        }
//    }
//
//    return -1;
//}
//
//export function myUnShift(array, element) {
//    array[myLength(array)] = array[myLength(array)] + 1;
//    array[0] = element;
//    return myLength(array);
//}
export function myConcat(array1, array2) {
    let array3 = [];
    let j = 0;
    for (let i = 0; i < array1.length + array2.length; i++) {
        array3[i] = array1[i];
        if (i >= array1.length) {
            array3[i] = array2[j];
            j++;
        }
    }
    return array3;
}

console.log(myConcat([1, 2, 3][(4, 5, 6)]));

// export function myPop(arrayThree){
//     const arrayThreecopy= [];
//     const element='';

//     for(let i= 0;i<arrayThree.length -1; i++){

// arrayThreecopy.push(elements)

// }
// console.log(arrayThreecopy)

// }

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
