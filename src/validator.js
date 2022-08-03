const validator = {
  isValid:  function(cardNumber){
    const cardArray = cardNumber.split('');
    let newArray = []; 
    let totalSum = 0;
    for (let i = 0; i < cardArray.length; i++){
        newArray.push(parseInt(cardArray[i]));
    }
    newArray.reverse();
    
    for(let i = 0; i< newArray.length ; i++){
        if (i%2 == 1){
        newArray[i] = newArray[i]*2;
        if (newArray[i] >= 10){
            newArray[i] = newArray[i]-9;
            }    
        }
       totalSum += newArray[i];
    }

    if (totalSum % 10 == 0){
        return true;
    }  
    else{
        return false;
    }
  },

  maskify: function (cardNumber) {
    let totalDigits = cardNumber.length;
    if (totalDigits < 4) {
      return cardNumber;
    }
    let indexStart4Digits = totalDigits - 4;
    let digitsToShow = cardNumber.slice(indexStart4Digits, totalDigits);
    let maskedNumber = "#".repeat(indexStart4Digits) + digitsToShow;
    return maskedNumber;
  },
};

export default validator;
