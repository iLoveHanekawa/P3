const inputBtn = document.getElementById("input-btn")
const myLead = []
const inputEl = document.getElementById("input-el")
inputBtn.addEventListener("click", function (){
    myLead.push(inputEl.value) 
    renderLeads()
    inputEl.value = ""
})
const ulEl = document.getElementById("ul-el")
function renderLeads() {    
    let listItems = ""
    for(let i = 0; i < myLead.length; i++) {
        listItems += `
            <li>
                <a href = '${myLead[i]}' target = '_blank'>${myLead[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
