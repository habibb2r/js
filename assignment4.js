// Lets Play A Mind Games

// function mindGames(input){
// let inputType =  typeof input;
// if(inputType == 'number'){
//     let multi = input *3;
//     let add = multi+10;
//     let divi= add/2;
//     let sub= divi-5;
//     return sub;
// }
// else{
//     return 'error! please give a number input';
// }
// }
// console.log(mindGames('hi'));

// Finding even or odd

// function evenOdd(finding){
//     let inputType =  typeof finding;
//     if(inputType =='string'){
//         let size  = finding.length;
//         if(size %2 ==0){
//             return 'even';
//         }
//         else{
//             return 'odd';
//         }
//     }
//     else{
//         return 'error! please give a string value'
//     }

// }
// console.log(evenOdd(34));

// Is Less or Greater than seven
// function isLGSeven(num){
//     let inputType =  typeof num;
//     if(inputType =='number'){
//         let difference = num-7;
//         if(difference<7){
//             return difference;
//         }
//         else{
//             return num*2;
//         }
//     }
//     else{
//         return 'error! please enter a number value';
//     }

// }
// console.log(isLGSeven(-15))

// Finding Bad data
// function findingBadData(data) {
//   let inputType = Array.isArray(data);
//   if (inputType == true) {
//     let badData = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] < 0) {
//         badData = badData + 1;
//       } else {
//         continue;
//       }
//     }
//     return badData;
//   }
//   else{
//     return 'error! please give array input';
//   }
// }
// const obj ={ name :'Habib', roll: 10, class: 4};
// const arr = [1, 2, 5, -2 ];
// console.log(findingBadData(obj));

// Gems to Diamond

// function gemsToDiamond(firstF, secondF, thirdF) {
//   if ( typeof firstF == "number" && typeof secondF == "number" && typeof thirdF == "number") {
//     const firstFCapacity = firstF * 21;
//     const secondFCapacity = secondF * 32;
//     const thirdFCapacity = thirdF * 43;
//     const totalDiamond = firstFCapacity + secondFCapacity + thirdFCapacity;
//         if (totalDiamond > 1000 * 2) {
//         const finalDiamond = totalDiamond - 2000;
//         return finalDiamond;
//         } 
//         else {
//         return totalDiamond;
//         }
//    }
//    else{
//     return 'error! please input number value';
//    }
// }
// console.log(gemsToDiamond(20, 200, 50));


// function mindGames(input){
//     let inputType =  typeof input;
//     if(inputType == 'number' && input >=0){
//         let multi = input *3;
//         let add = multi+10;
//         let divi= add/2;
//         let sub= divi-5;
//         return sub;
//     }
//     else{
//         return 'error! please give a positive number input';
//     }
//     }
//     console.log(mindGames(-1))

function mindGames(input){
    let add = input + 100;
    if(add<150){
        let div = add / 5;
        return div;
    }
    else{
        let multi = add * 5;
        return multi;
    }
}
console.log(mindGames(55))