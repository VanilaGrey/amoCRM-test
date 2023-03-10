const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
const interval = 1000;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => (seconds) => {
	const intervalId = setInterval(() => {
		seconds--;
		timerEl.innerHTML = seconds;
		if (seconds === 0) {
			clearInterval(intervalId);
		}
	}, interval);
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (evt) => {
	evt.currentTarget.value = evt.currentTarget.value
		.replace(/\D/g, '')
		.replace(/(\d\d)/g, '$1:')
		.replace(/:$/g, '');
});

buttonEl.addEventListener('click', () => {
	const seconds = Number(inputEl.value);

	animateTimer(seconds);
	inputEl.value = ' ';
});
