const inputs = document.querySelectorAll(".angle-input");

const outputEl = document.querySelector("#output");

const caluclateBtn = document.querySelector(".check-btn")



function caluclateSumOfAngles (angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
  // console.log(sumOfAngles);
}

function isTriangle() {

  const sumOfAngles = caluclateSumOfAngles (Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
  if(sumOfAngles === 180)
  {
    outputEl.innerText = "YAY ! The angles form a triangle";
    
  }
   else 
  {
    outputEl.innerText = "Oh no ! The angles doesnt form a triangle";
  }
   
 }
 caluclateBtn.addEventListener("click", isTriangle)
 