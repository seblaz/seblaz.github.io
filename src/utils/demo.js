const express = require('express');
const open = require('open');


const app = express();

app.use(express.static('build', {extensions: ['html']}));

app.listen(3000, function () {
    open('http://localhost:3000');
    console.log('Example app listening on port 3000!');
});
