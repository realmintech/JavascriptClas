// let a = [5, 4,3,2,1];
// const able = a.reduce(factorial)
// function factorial(total, value){
//    return total * value 
// }

// document.getElementById('welcome').innerHTML = able;








// let result = 1;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number);

// function number(value) {
//     result *= value;
// };

// console.log(result);

// let even = 1;
// const odd = [5,4,3,2,1]
// odd.forEach(function (numbers){
//     even *= numbers 
// })
// console.log(even)

// const number = [5,4,3,2,1];
//  number.forEach(function (solve){
//     number *= (number - 1)
//     solve()
//  })

//  Palindrome
// let word = ["C","a","s","s","a","v","a"];
// let reversed = word.reverse();
// let replaced = reversed.replace(",", "")
// console.log(reversed)
// console.log(replaced)
// if(reversed === word){
//     console.log(`The ${word} is a palindrome`)
// }else{
//     console.log(`The ${word} is not a palindrome`)
// }
// const word = ["tolu", "tolu"];
// if (word.includes("ade")){
//     console.log("True")
// }else{
//     console.log("false")
// }

// const word = ["leg", "head", "toes"];
// const books = ["fruit", "read", "dance"]

// const quene = [...word, ...books]
// console.log(quene)

// map ////////

// const goods = ["biscuit", "soap", "milk",]
// const all = goods.map(myFunction);

// function myFunction(value){
//     console.log(`${value}  good`)
// }
// console.log(all)

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i++) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));





