const express = require('express');
const { exec } = require('child_process');
const app = express();
const Gtts = require('gtts');


app.get('/:text', function (req, res) {

	var text=req.params.text

	text=text.replace("!"," ")

	if(text=="favicon.ico"){
		res.send("fuck u")
		return
	}


	const gtts = new Gtts(text, 'en');


	gtts.save('warning.mp3', function (err, result) {
		console.log(`Saved warning=${text} to mp3!`);

		exec('afplay warning.mp3');
	});

	res.send('Playing warning.');
});


app.listen(3000, function () {
	console.log('Program started!');
});
