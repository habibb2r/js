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
console.log(isLGSeven(-15))