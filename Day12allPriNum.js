// program to print prime numbers between the two numbers
const lowerNumber = 2;
const higherNumber = 25;
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (let i = lowerNumber; i <= higherNumber; i++){
     let num = 0;
     for  (let j = 2; j < i; j++){
      if(i % j == 0){
        num = 1;
        break;
      }
     }
     // if number greater than 1 and not divisible by other numbers
    if (i > 1 && num == 0) {
        console.log(i);
    }
}