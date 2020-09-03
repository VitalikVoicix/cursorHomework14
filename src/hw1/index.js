
 const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const createPairs = () => {
       const studentsPairs = []; 
       const boys = [];
       const girls = [];
          for(let i = 0; i < students.length; i++){
             if(students[i] === 'Олена' || students[i] === 'Іра' || students[i] === 'Світлана'){
               girls.push(students[i]);
             }else{
               boys.push(students[i]);
             }
          }
          for (let i = 0; i < boys.length; i++) {
             studentsPairs.push( [girls[i] + " i " + boys[i]]);
           }
             return studentsPairs;
     }
const totalPairs = createPairs(students);

export {totalPairs,students};