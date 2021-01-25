var fs = require('fs');
var txt = fs.readFileSync('./song.txt',{encoding: 'utf-8'});
console.log(txt);
fs.writeFileSync('./s2.txt','hello');