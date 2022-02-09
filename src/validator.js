
const validator = {
  isValid:function(number){
    let cardNumber = number;
    let invertedCardNumber = cardNumber.split("").reverse();
    let convertNumberArray = invertedCardNumber.map(Number);
    let multBy2 = function(element, index){
      if (index % 2 !== 0){
        return element*2;
      } else {
        return element;
      }
    };
    let multBy2Array= convertNumberArray.map(multBy2);

    let finalArray=multBy2Array.map(function(element){
      if (element>=10){
        return element-9;
      } else {
        return element;
      }
    });
    let sumOfNumbers=0;
    for (let i = 0; i < finalArray.length; i++) {
    sumOfNumbers += finalArray[i]
    }
    let result= function(){
      if(sumOfNumbers % 10 === 0){
        return true;
      } else{
        return false;
      }
      };

    let booleanResult = result();
    return booleanResult;
    },

  maskify:function(string){
      let cardNumber = string;
      let totalDigits=cardNumber.length;
      if (totalDigits < 4) {return cardNumber;}
      let indexStart4Digits=totalDigits-4;
      let digitsToShow=cardNumber.slice(indexStart4Digits,totalDigits);
      let maskedNumber ='#'.repeat(indexStart4Digits) + digitsToShow;
      return maskedNumber;
    }
  }












export default validator;
