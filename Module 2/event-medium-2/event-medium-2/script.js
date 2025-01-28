let score = 0;

function startGame() {
  const target = document.getElementById('target');
  target.style.left = '0px';
  target.style.top = '0px';

  target.onclick = function () {
    score++;
    document.getElementById('score').innerText = score;
    moveTarget();
  };

  moveTarget();
}

function moveTarget() {
  const target = document.getElementById('target');
  const maxX = window.innerWidth - target.offsetWidth;
  const maxY = window.innerHeight - target.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  target.style.left = `${newX}px`;
  target.style.top = `${newY}px`;
}

window.onload = startGame;
