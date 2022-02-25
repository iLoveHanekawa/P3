const inputBtn = document.getElementById("input-btn")
const myLead = ["apple", "banana", "cherry"]
const inputEl = document.getElementById("input-el")
inputBtn.addEventListener("click", function (){
    myLead.push(inputEl.value) 
})
const ulEl = document.getElementById("ul-el")
for(let i = 0; i < myLead.length; i++) {
    ulEl.innerHTML += "<li>" + myLead[i] + "</li>"
}