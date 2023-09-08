'use strict';

// message
const message = document.querySelector('.message');

// score card names
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
// dice image container
const dice = document.querySelector('.dice');
// die rolling
const dieroll = document.querySelector('.btn--roll');
// new game
const refresh = document.querySelector('.btn--new');
// var diecount = 0;

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');


const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const last0 = document.querySelector('#current--0');
const last1 = document.querySelector('#current--1');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let player0score = 0;
let player1score = 0;
// Rolling dice functionality
dieroll.addEventListener('click',function(){
    const diecount = Math.trunc(Math.random() * 6) + 1;
    console.log(diecount);

    dice.classList.remove('hidden');
    dice.src = `die-${diecount}.png`;

    if(diecount === 1){
        // message.textContent = `PLAYER GOT EXTRA ROLL 👯 FOR ROLLING ${diecount}`;
        activePlayer = activePlayer === 0 ? 0 : 1;
        if(activePlayer === 0){
            // player0score += currentScore;
            player0score += diecount;
            document.getElementById(`score--${activePlayer}`).textContent = player0score;
        }
        else{
            // player1score += currentScore;
            player1score += diecount;
            document.getElementById(`score--${activePlayer}`).textContent = player1score;
        }
    }
    else{
        if(player0score < 50 && player1score < 50){
            if(player1score === 0 && player0score ===0){
                activePlayer = 0;
            }
            else
                activePlayer = activePlayer === 0 ? 1 : 0;

            if(activePlayer === 0){
                // player0score += currentScore;
                player0score += diecount;
                document.getElementById(`score--${activePlayer}`).textContent = player0score;
            }
            else{
                // player1score += currentScore;
                player1score += diecount;
                document.getElementById(`score--${activePlayer}`).textContent = player1score;
            }
        }
        else{
            dieroll.classList.add('hidden');
            if(player0score >= 50){
                message.textContent = `PLAYER 1 WON THE MATCH 👯`;
                last0.textContent = player0score;
                last1.textContent = player1score;
            }
            else{
                message.textContent = `PLAYER 2 WON THE MATCH 👯`;
                last1.textContent = player1score;
                last0.textContent = player0score;
            }
        }
            // document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
        
    }
});

refresh.addEventListener('click',function(){
    player0score = 0;
    player1score = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    message.textContent = "WELCOME TO THE GAME";
    dieroll.classList.remove('hidden');
    activePlayer = 0;
    dice.classList.add('hidden');
});