const express = require('express');
const { exec } = require('child_process');
const app = express();
const Gtts = require('gtts');

app.get('/:text', function (req, res) {
	const gtts = new Gtts(req.params.text, 'en');

	gtts.save('warning.mp3', function (err, result) {
		console.log(`Saved warning=${req.params.text} to mp3!`);

		exec('cvlc warning.mp3');
	});

	res.send('Playing warning.');
});

app.listen(3000, function () {
	console.log('Program started!');
});
