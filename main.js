console.log("Script attached");

let node1 = document.getElementById("node1");
node1.textContent = " I used the getElementById(\"node1\") method to access this"; 
let node2 = document.getElementByClassName("node2");
node2.textContent = " I used the getElementByClassName(\"node2\") method to access this"; 
let h3s = document.getElementByTagName("h3s");
for (let h3 of h3s)
h3.textContent = " I used the getElementByTagName(\"h3\") method to access this"; 
 

let p = document.childElement("p");
p.textContent = "This node was creaed using thr createElement() method";

let parent2 = document.querySelector("#parent");
parent2.appendChild(p);
 
let link = document.createElement("a");
link.textContent = "Google Search";
link.href = "https://www.google.com/";

parent2.insertBefore(link, p);

let child = document.childElement("p");
child.textContent = "New Child Node";

let parent3 = document.querySelector("#exercise-container3");
let replecsChild = document.querySelector("#N1");
parent3.replaceChild(child, replecsChild);

setTimeout(() => {
    parent3.removeChild(child);
}, 5000);


let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];
  
let container4 = document.querySelector("#container");
container4.appendChild(ul);

