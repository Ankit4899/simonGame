let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let btns = ['red', 'green', 'yellow', 'purple'];

let h2 = document.querySelector("h2");

document.addEventListener('keypress', () => {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelUp();
    }
})


function gameFlash(btn) {
    btn.classList.add('flash');

    setTimeout(function () {
        btn.classList.remove('flash');
    }, 200)
}

function userFlash(btn) {
    btn.classList.add('userFlash');

    setTimeout(function () {
        btn.classList.remove('userFlash');
    }, 200)
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx) {
    // console.log('level is :', level);

    // let idx = level-1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}<b>  <br> Press any key to start`;

        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 150)
        reset();
    }

}

function btnpress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll('.btn');
for (btn of allbtns) {
    btn.addEventListener('click', btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}