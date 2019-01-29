fs = require('fs');
var parser = require('xml2json');
var adb = require('./config.inc.js');

fs.readFile( './data.xml', function(err, data) {
    var json = parser.toJson(data);
    console.log("to json ->", json);
 });
