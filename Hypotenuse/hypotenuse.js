const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");


function caluclateSumOfSquares (a,b){
    const sumOfSquares = a*a + b*b ;
   // console.log(sumOfSquares);
   return sumOfSquares;
}


function caluclateHypotenuse(){
const sumOfSquares = caluclateSumOfSquares
(Number(sides[0].value),Number(sides[1].value));
const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
outputE1.innerText = "The length of hypotenuse is" + lengthOfHypotenuse ;
}

hypotenuseButton.addEventListener('click',caluclateHypotenuse);
