var lvl = document.getElementById('lvl');
var moreBtn = document.getElementById('moreBtn');

moreBtn.onclick = function() {

    if (lvl.className == "open") {
        lvl.className = "";
        moreBtn.innerHTML = "Show More";
    } else {
        lvl.className = "open";
        moreBtn.innerHTML = "Show Less";
    }

};
