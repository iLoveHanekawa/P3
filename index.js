const inputBtn = document.getElementById("input-btn")
let myLead = []
const inputEl = document.getElementById("input-el")
const tabBtn = document.getElementById("tab-btn")
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render(myLead)
    })
})
inputBtn.addEventListener("click", function (){
    myLead.push(inputEl.value)
    localStorage.setItem("myLead", JSON.stringify(myLead)) 
    render(myLead)
    inputEl.value = ""
})
leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
if(leadsFromLocalStorage)
{
    for(let i = 0; i < leadsFromLocalStorage.length; i++) {
        myLead.push(leadsFromLocalStorage[i])
    }
}
const ulEl = document.getElementById("ul-el")
render(myLead)
function render(myLead) {    
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

const delBtn = document.getElementById("del-btn")
delBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLead = []
    render(myLead)
})
