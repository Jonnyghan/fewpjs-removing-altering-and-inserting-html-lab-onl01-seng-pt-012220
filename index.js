// Write your code here!
let element = document.querySelector("main#main");
element.remove();
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
let element2 = document.querySelector("h1");
element2.id = "victory";
element2.nodeName = "H1";
element2.innerHTML = `Jonathan is the champion`;