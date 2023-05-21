// // task 1

// const change = (string, valueToReplace, valueToReplaceWith) => {
//     let res = "";
//     let lowValueToReplace = valueToReplace.toLowerCase();

//     for(let i = 0; i < string.length; i++){
//         let current = string[i];
//         let lowerCurrent = current.toLowerCase();
//         if(lowerCurrent === lowValueToReplace){
//             current = valueToReplaceWith;
//         }

//         res += current;
//     }
//     return res

// }

// console.log(change("Messi", "m", "P"))





// // task 2

// const convertSentence = (str) => {
//     // javascript
//     // let arr = []
//     // let result = "";
//     // let everySent = str.split(" ");
//     // for(const w in everySent){
//     //     let first = everySent[w][0].toUpperCase();
//     //     let other = everySent[w].slice(1)
//     //     let comb = first + other
//     //     arr.push(comb)
//     //     result = arr.join(" ")
//     // }
//     // return result


// //     ES6
//     const everySent = str.split(" ");
//     const result = everySent.map((word) => {
//         const first = word[0].toUpperCase();
//         const other = word.slice(1);
//         return first + other;
//     })
//     return result.join(" ");
// }


// console.log(convertSentence("i am the danger, skyler"))
// console.log(convertSentence("winther is coming"))





// // task 3


// const userArr = [
//     {name: "John Snow", age: 23},
//     {name: "Arya Stark", age: 18},
//     {name: "Tyrion Lannister", age: 39},
//     {name: "Melisandre", age: 402},
//     {name: "Jaime Lannister", age: 43}
// ]


// // კონკრეტულად ამ მაგალითზე
// const sortArr = (array) => {
//     return array.sort((firstElem, secondElem) => firstElem.age - secondElem.age)     
// }
// console.log(sortArr(userArr))


// // ზოგადი ფუნქცია. დავუშვათ key: age არ აქვს ობიექტს და აქვს სხვა მონაცემი
// const sortGeneralArr = (array, key) => {
//     return array.sort((firstElement, secondElement) => firstElement[key] - secondElement[key])
// }
// console.log(sortGeneralArr(userArr, "age"))