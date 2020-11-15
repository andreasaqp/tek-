const { exec } = require('child_process');
const express = require('express');

const app = express();

function playSound() {
	exec('cvlc alarm.mp3');
}

app.get('/play', (req, res) => {
	playSound();
	res.send('Playing sound.');
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
