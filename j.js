
var x = document.getElementById("span");
var y = document.querySelector(".container");
var z = Math.ceil(Math.random() * 1000);

x.onclick = function () {
    'use strict';
    
    y.style.transform = "rotate(" + z + "deg) ";
    z += Math.ceil(Math.random() * 1000);
};