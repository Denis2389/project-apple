// let a = 5;
// let b = 10;

// [a,b] = [b,a]

// console.log(a,b);

// function isEven(num) {
//     if (num % 2 === 0) {
//         console.log('true');
//     } else {
//         console.log('false')
//     }
// }

// isEven(5)

// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(isEven(3))


function findMax(arr) {
    maxArr = [0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxArr) {
            maxArr = arr[i]
        }
    }
return maxArr
}

console.log(findMax([1,3,7,2,5]));