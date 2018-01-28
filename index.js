import './app/styl/style.styl';
import './app/pages/index.haml';

var through = require('through2');
// var process = require('child_process');

cmd = 'haml '+ ' app/pages/index.haml ' + 'app/index2.html';
process.exec(cmd , function (error, stdout, stderr) { 
    if (error) console.log(error.message)
})

console.log('Проверка');