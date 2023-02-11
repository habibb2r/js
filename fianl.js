
// Function Explanation: This mindGames function takes a number type input and multiply with 3, then added with 10, whole added calculation divide with 2, then divide value subtract with 5, then return whole result.

function mindGames(input){
    let inputType =  typeof input;
    if(inputType == 'number' && input >=0){
        let multi = input *3;
        let add = multi+10;
        let divi= add/2;
        let sub= divi-5;
        return sub;
    }
    else{
        return 'error! please give a positive number input';
    }
}



// Function Explanation: This evenOdd function take string value and will find the length of that string , if length size is divisible by 2 then it will return even, other wise it will return odd

function evenOdd(finding){
    let inputType =  typeof finding;
    if(inputType =='string'){
        let size  = finding.length;
        if(size %2 ==0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
    else{
        return 'error! please give a string value'
    }

}



// Function Explanation: This isLGSeven function will take a number input, the number will substract by 7. if after substraction value is less then 7 then return subtracted result , otherwise return double of given input number.

function isLGSeven(num){
    let inputType =  typeof num;
    if(inputType =='number'){
        let difference = num-7;
        if(difference<7){
            return difference;
        }
        else{
            return num*2;
        }
    }
    else{
        return 'error! please enter a number value';
    }

}



// Function Explanation: This findingBadData take array input , if in the array element have less then 0 like(-1,-2,-5) value then it will add as badData. after checking all array element the function will return number of badData.

function findingBadData(data) {
  let inputType = Array.isArray(data);
  if (inputType == true) {
    let badData = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] < 0) {
        badData = badData + 1;
      } else {
        continue;
      }
    }
    return badData;
  }
  else{
    return 'error! please give array input';
  }
}



// Function Explanation : This gemsToDiamond function take 3 parameter number value as gems. first friend can produce diamond for each gem 21 diamonds, second friend 32, third friend 43. Multiply paramter value with diamond value for eeach person. Add everyones totalDiamond. if totalDiamond is greater than (1000*2) then subtract 2000 from totalDiamond and return value otherwise retuen totalDiamond value.

function gemsToDiamond(firstF, secondF, thirdF) {
  if ( typeof firstF == "number" && typeof secondF == "number" && typeof thirdF == "number") {
    const firstFCapacity = firstF * 21;
    const secondFCapacity = secondF * 32;
    const thirdFCapacity = thirdF * 43;
    const totalDiamond = firstFCapacity + secondFCapacity + thirdFCapacity;
        if (totalDiamond > 1000 * 2) {
        const finalDiamond = totalDiamond - 2000;
        return finalDiamond;
        } 
        else {
        return totalDiamond;
        }
   }
   else{
    return 'error! please input number value';
   }
}
