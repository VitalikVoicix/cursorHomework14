const heroes =["https://swapi.dev/api/people/1/",
              "https://swapi.dev/api/people/2/", 
              "https://swapi.dev/api/people/3/",
              "https://swapi.dev/api/people/4/",
              "https://swapi.dev/api/people/5/",
              "https://swapi.dev/api/people/10/",
              "https://swapi.dev/api/people/12/",
              "https://swapi.dev/api/people/13/",
              "https://swapi.dev/api/people/14/",
              "https://swapi.dev/api/people/18/",
              "https://swapi.dev/api/people/20/",
              "https://swapi.dev/api/people/21/",
              "https://swapi.dev/api/people/22/",
              "https://swapi.dev/api/people/23/",
              "https://swapi.dev/api/people/24/",
              "https://swapi.dev/api/people/25/",
              "https://swapi.dev/api/people/26/",
              "https://swapi.dev/api/people/27/"]

  function show(){   
for(let i = 0;i<heroes.length;i++){
  fetch(heroes[i])
.then((response) =>{
   return response.json()

})
.then((data) => { 
    let box = document.querySelector(".box");
    let pers =  document.createElement("div");
    pers.innerText =`Hero:${data.name} 
    Gender: ${data.gender}
    Year: ${data.birth_year}`
    pers.classList.add("container")
    box.appendChild(pers);

  });    

}

 }
export{heroes,show}