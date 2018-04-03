var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var name = url_parts.query.name;
    var adress = url_parts.query.adress;
    var surname = url_parts.query.surname;
    var pseudo = url_parts.query.pseudo;
    var email = url_parts.query.email;
    console.log(url_parts.query);
    var json = JSON.stringify(url_parts.query);


    if (name && surname && adress && pseudo && email) {
        writeToFile(json);
        res.writeHead(200, {'Content-Type': 'application/json'});
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('form.html',function (err,data) {
            res.end(data);
        });
    }
}).listen(1337, '127.0.0.1');

function writeToFile(item)
{
fs.readFile("user.txt", function (err,data) {
    fs.writeFile("user.txt", data+item);
    console.log("User created");
})
}

function getAllUser(){
    fs.readFile("user.txt", function(err,data) {
        var test = JSON.parse(data);
    })
}

console.log('Server running at http://127.0.0.1:1337/');