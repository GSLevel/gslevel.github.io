var lvl = document.getElementById('LvL');
var main = document.getElementById('main');
var desc = document.getElementById('desc');
var btns = document.getElementById('buttons');

setTimeout(() => {
    lvl.classList.add("fade");
}, 5000);

setTimeout(() => {
   main.classList.add("fade2");
   lvl.style.display = "none";
}, 6500)

setTimeout(() => {
    desc.classList.add("fade3");
 }, 7500)

 setTimeout(() => {
    btns.classList.add("fade4");
    setTimeout(() => {
        btns.style.opacity = "1"
    }, 8,700)
 }, 8500)
