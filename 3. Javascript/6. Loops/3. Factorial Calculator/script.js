let num = 18;

function factorialCalculator(num){
  if(num <= 1){
    return 1;
  }else{
    return num * factorialCalculator(num-1)
  }
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);