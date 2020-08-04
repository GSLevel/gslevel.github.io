var lvl = document.getElementById('lvl');
var moreBtn = document.getElementById('moreBtn');
var clickBtn = document.getElementById('clickBtn');

moreBtn.onclick = function() {

    if (lvl.className == "open") {
        lvl.className = "";
        moreBtn.innerHTML = "Show More";
    } else {
        lvl.className = "open";
        moreBtn.innerHTML = "Show Less";
    }

};

function change() {
    clickBtn.innerHTML = "sub to gs level for good content starting in september"
}

function play() {
    var audio = document.getElementById('clickme');
    audio.play();
}

function play1() {
    var audio = document.getElementById('showmore');
    audio.play();
}

function play2() {
    var audio = document.getElementById('portfolio');
    audio.play();
}

function play3() {
    var audio = document.getElementById('blocc');
    audio.play();
}

function play4() {
    var audio = document.getElementById('srchh');
    audio.play();
}

function play5() {
    var audio = document.getElementById('sub');
    audio.play();
}

