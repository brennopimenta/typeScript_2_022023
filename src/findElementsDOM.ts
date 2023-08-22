let element = document.getElementById("btn2");  //return HTMLButtonElement
console.log("teste" + element);
console.log(element);

let element2 = document.querySelector(".test"); // return Element
console.log("teste element2" + element2);
console.log(element2);

let element3 = document.querySelector("#main"); // return HTMLDivElement
console.log("teste element3" + element3);
console.log(element3);

let elements = document.getElementsByTagName("div"); // return NodeListOf<HTMLDivElement>
console.log("teste elements" + elements);
console.log(elements);
console.log(elements[3]);

let elements2 = document.querySelectorAll(".test"); // return NodeList
console.log("teste elements2" + elements2);
console.log(elements2);
console.log(elements2[0]);
console.log(<HTMLButtonElement> elements2[0]); //return Node

let elements3 = document.getElementsByName("button"); // return NodeList<HTMLElement>
console.log("teste elements3" + elements3);
console.log(elements3);
