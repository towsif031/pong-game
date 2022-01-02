import Ball from './Ball.js';
import Paddle from './Paddle.js';

const ball = new Ball(document.querySelector('#ball'));
const playerPaddle = new Paddle(document.querySelector('#player-paddle'));
const computerPaddle = new Paddle(document.querySelector('#computer-paddle'));

let lastTime;
function update(time) {
	if (lastTime != null) {
		const delta = time - lastTime;
		ball.update(delta);
		computerPaddle.update(delta, ball.y);
	}

	lastTime = time;
	window.requestAnimationFrame(update);
}

document.addEventListener('mousemove', (event) => {
	playerPaddle.position = (event.y / window.innerHeight) * 100;
});

window.requestAnimationFrame(update);
