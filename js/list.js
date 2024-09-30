
console.log("Skriv dit Javascript her")
//let a = document.getElementsByTagName("li");
//console.log(a)

let myElement = document.getElementById("one")
console.log(myElement)

let myList = document.getElementsByTagName("li")
console.log(myList)

let coolElement = document.getElementById("two")
coolElement.className = "cool"
document.getElementById("four").setAttribute("hidden",true)

let burgerElement = document.getElementsByClassName("unhealthy")
burgerElement.item(0).className = "cool"

let list = document.getElementById("three").parentNode
list.firstElementChild.className = "cool"
list.lastElementChild.className = "hot"

let newElement = document.createElement("li")
newElement.setAttribute("id","six")
newElement.className = "hot"
let newText = document.createTextNode("apple")
newElement.append(newText)
let unorderedlist = document.getElementsByTagName("ul")
unorderedlist[0].append(newElement)
console.log("slut på JavaScript")
