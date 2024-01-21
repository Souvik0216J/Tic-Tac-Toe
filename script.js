console.log("Tic Tic Toe");
let music = new Audio("music.mp3");
let turn_sound = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let game_over = false;

// Function to change the turn
const change_turn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to cheak for a win
const cheak_win = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 7],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            game_over = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = change_turn();
            turn_sound.play();
            cheak_win();
            if(!game_over){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                console.log(turn)
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

