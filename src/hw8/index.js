
let input5 = document.querySelector(".enter");
let answer5 = document.querySelector(".answer");
const step = 50;
function getRandomChinese(){
  return new Promise(function(resolve) {
      setTimeout(() => {
          let arr = [];
          let sign = Date.now().toString().slice(-5);
               for(let i = 0;i<input5.value;i++){
               sign+=i;    
               arr.push(String.fromCharCode(sign));
           }
          resolve( arr.join(""));
      },input5.value * step);
  });
}
export{getRandomChinese,input5,answer5}