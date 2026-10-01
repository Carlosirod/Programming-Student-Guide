console.log("JavaScript is working!")
let content = document.getElementById("content");
content.textContent = "Hello its the goat, Carlos";

let languageBut = document.querySelectorAll(".languages-button");
for(let i=0;i<languageBut.length;i++){
    languageBut[i].addEventListener("click",function(){
        content.textContent = "You selected --- " + this.textContent;
    })
}