import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(`timeupdate`, throttle(function (data) {
	const { seconds } = data;
	 const timeupdate = JSON.stringify(seconds);
	localStorage.setItem(`videoplayer-current-time`, timeupdate);
}, 1000));


// вешаем событие при обновлении страницы
addEventListener(`DOMContentLoaded`, () => {
	try {
		 // получаем текущее время из localeStorage
		 const localeSeconds = JSON.parse(localStorage.getItem(`videoplayer-current-time`));

		 // используем библиотеку для запуска видео по текущему времени
		 player.setCurrentTime(localeSeconds).then(function(seconds) {
}).catch(function(error) {
	switch (error.name) {
		 case 'RangeError':
				console.log(`the time was less than 0 or greater than the video is duration`);
			  break;

		 default:
				console.log(`some other error occurred`);
			  break;
	}
});
	} catch (error) {
		 console.log(`parsing error`);
	}
	

});