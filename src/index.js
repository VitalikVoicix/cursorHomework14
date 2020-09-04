
 import {totalPairs} from "./hw1/index";
 import{getmoda} from"./hm2/index";
 import{ getSubjects,students} from"./hm3/index"
 import{ukraine,getMyTaxes} from "./hm4/index"
 import {Student} from "./hm5/index"
 import{generateBlocks} from "./hm6/index"
 import{playSound} from "./hw7/index"
 import{getRandomChinese,input5,answer5} from "./hw8/index"
 import{heroes,show} from "./hm9/index"
 import "./style.css"

let   transformName =function () {
    
    let upperCaseName = input3.value[0].toUpperCase() + input3.value.slice(1).toLowerCase();
    answer3.innerHTML = `Результат ${upperCaseName}`;
 }
const btn3 = document.querySelector(".btn3");
const input3 = document.querySelector(".input3");
const  answer3 = document.querySelector(".answer3");


btn3.addEventListener('click',transformName);
/////////////////////////////////////////////////////

const pair = document.querySelector(".pair");
pair.textContent = totalPairs;
/////////////////////////////////
const number=document.querySelector(".number");
number.textContent= getmoda(1,2,2,2,2,2,2,2,1);
///////////////////////////////////////////////
const student=document.querySelector(".student");
student.textContent= getSubjects(students[0]);
/////////////////////////////////////////////
const tax=document.querySelector(".tax");
tax.textContent=getMyTaxes.call(ukraine,15000);
/////////////////////////////////////////////
const ostap= new Student("1 курс","Вищої Школи Психотерапії м.Одеса","Остап Бендер");
const pupil=document.querySelector(".pupil");
pupil.textContent=ostap.getInfo();
//////////////////////////////////////////////
const button9 = document.querySelector("#btn1");
button9.addEventListener('click',generateBlocks);
//////////////////////////////////////////////
//const button7 = document.querySelector(".btn7");
function playMusic(e) {
    if(e.keyCode === 83) {
       playSound("./file1.mp3")
    }
 }
addEventListener("keyup", playMusic);
//////////////////////////////////////////
const btn5 = document.querySelector(".btn10");
btn5.addEventListener("click",() =>{
    getRandomChinese(input5.value)
    .then(word => {
    answer5.innerHTML =
  ` <p> China word:${word}</p>`
})
});
///////////////////////////////////
const btn = document.querySelector(".btn8");
        btn.addEventListener("click",show);


 