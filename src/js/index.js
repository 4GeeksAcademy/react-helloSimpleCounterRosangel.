//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter.js";

let digit = 0;
setInterval(function () {
    const uno = Math.floor((digit / 1000000) % 10);
    const dos = Math.floor((digit / 100000)% 10);
    const tres = Math.floor((digit / 10000)% 10);
    const cuatro = Math.floor((digit / 1000)% 10);
    const cinco = Math.floor((digit / 100)% 10);
    const seis = Math.floor((digit / 10)% 10);
    const siete = Math.floor((digit / 1) % 10);
    console.log(uno, dos, tres, cuatro, cinco, seis, siete)
    ReactDOM.render(<Counter uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} siete={siete} />, document.querySelector("#app"));
    digit++;

}, 500)
//render your react application

