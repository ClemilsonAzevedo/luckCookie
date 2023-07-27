const luck = document.querySelector(".luck");
luck.classList.remove("luck")

const home = document.querySelector(".home")
const closeLuckCookie = document.querySelector(".home img")
const btn = document.querySelector(" button")

closeLuckCookie.addEventListener("click", changeScreen)
btn.addEventListener("click", resetLuck)

function changeScreen(){
  home.classList.remove("home")
  luck.classList.remove("hide")  
  luck.classList.add("luck")
  home.classList.add("hide")
}

function resetLuck(){
  luck.classList.add("hide")
  luck.classList.remove("luck")
  home.classList.remove("hide")
  home.classList.add("home")
}