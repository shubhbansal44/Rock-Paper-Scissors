// 0 < Paper <= 1/3 || 1/3 < Rock <= 2/3 || 2/3< Scissor <= 1

let score = JSON.parse(localStorage.getItem('score')) || {
    'wins': 0,
    'losses': 0,
    'ties': 0
};

const res=document.querySelector('.js-results'),pm=document.querySelector('.js-pmove'),cm=document.querySelector('.js-cmove'),sc=document.querySelector('.js-score'),rock=document.querySelector('.js-rock'),paper=document.querySelector('.js-paper'),scissor=document.querySelector('.js-scissor'),rset=document.querySelector('.js-reset');

function prs_game(pmove) {
    if(pmove==='paper') {
        paper.classList.add('pressed');
        rock.classList.remove('pressed');
        scissor.classList.remove('pressed');
        rset.classList.remove('pressed');
    } else if(pmove==='rock') {
        rock.classList.add('pressed');
        paper.classList.remove('pressed');
        scissor.classList.remove('pressed');
        rset.classList.remove('pressed');
    } else {
        scissor.classList.add('pressed');
        rock.classList.remove('pressed');
        paper.classList.remove('pressed');
        rset.classList.remove('pressed');
    }

    let cmove;
    let a = Math.random();

    if (a <= 1/3) {
        cmove = 'paper';
    } else if (a <= 2/3) {
        cmove = 'rock';
    } else {
        cmove = 'scissor';
    }
    
    if ((pmove==='paper' && cmove==='rock') || 
        (pmove==='rock' && cmove==='scissor') || 
        (pmove==='scissor' && cmove==='paper')) {
        score.wins++;
        res.textContent='You won!!';
        pm.textContent=`Your move: ${pmove}`;
        cm.textContent=`Computer move: ${cmove}`;
        sc.textContent=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    } else if ((pmove==='paper' && cmove==='scissor') || 
                (pmove==='rock' && cmove==='paper') || 
                (pmove==='scissor' && cmove==='rock')) {
        score.losses++;
        res.textContent='You Lost!!';
        pm.textContent=`Your move: ${pmove}`;
        cm.textContent=`Computer move: ${cmove}`;
        sc.textContent=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    } else {
        score.ties++;
        res.textContent='tie!!';
        pm.textContent=`Your move: ${pmove}`;
        cm.textContent=`Computer move: ${cmove}`;
        sc.textContent=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
    }
    
    localStorage.setItem('score', JSON.stringify(score));
};

function reset () {
    localStorage.removeItem('score');
    rset.classList.add('pressed');
    rock.classList.remove('pressed');
    scissor.classList.remove('pressed');
    paper.classList.remove('pressed');
    score = {
        'wins': 0,
        'losses': 0,
        'ties': 0
    };
    res.textContent='Score Reset!!';
    pm.textContent=`Your move: NULL`;
    cm.textContent=`Computer move: NULL`;
    sc.textContent=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}