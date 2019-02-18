const express = require('express');
const core = require('cors');
const ytdl = require('ytdl-core');

const app = express();
app.listen(4000, () =>{
	console.log('SERVER WORKS!');
});