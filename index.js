var fs = require('fs');
var colors = require('colors');
/*
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.red)
            console.log(data);
        });
    });
});
*/
fs.readdir('../file system', 'utf-8', function(err, data) {
	console.log(data);
	fs.writeFile('./directory.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);
        fs.readFile('./directory.txt', 'utf-8', function(err, data) {
            console.log(data.blue); 
            //console.log(data[0]) pokazuje tylko pierwszą literę "c" a nie całą nazwę pierwszego pliku cat.jpg :-/
            //nie wiem jak rozdzielic nazwy plików...
		});
	});
});