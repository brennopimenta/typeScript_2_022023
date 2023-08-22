"use strict";
class ClickHandlers {
    constructor() {
        let main = document.getElementById("main");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandlers.alertEventMain, false); // false is bubblyng, true is capturing
            btn1.addEventListener("click", ClickHandlers.alertEventBtn1, true);
            btn2.addEventListener("click", ClickHandlers.alertEventBtn2, true);
        }
    }
    static alertEventMain() {
        alert("clicked over main");
    }
    static alertEventBtn1(event) {
        alert("Back End Btn1");
    }
    static alertEventBtn2(event) {
        alert("Front End Btn2");
    }
}
const clickHandlers = new ClickHandlers();
