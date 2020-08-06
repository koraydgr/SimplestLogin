// INSTALL FOLLOWING MODULES THROUGH NPM AND REMOVE COMMENT TAGS > npm i express, path, fs

/* <- REMOVE THESE TAGS

const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const port = 1234; //CHANGE YOUR PORT NUMBER

app.use(express.urlencoded({
  extended: true
}));
*/

app.post("/loged", function(req, res) {

  fs.readFile('users.json', function(err, data) {

    // Username & Password that come from FORM SIDE
    const name = req.body.name;
    const pwd = req.body.pwd;

    // CONVERT DATABASE INTO OBJECT
    const db = JSON.parse(data)

    // CONVERT DATABASE KEYS & VALUES INTO ARRAY
    const keyString = Object.keys(db)
    const valueString = Object.values(db)

    // BÖYLECE ARRAY İÇERİSİNDE ARAMA YAPABİLECEĞİZ. FORM'A GİRİLEN USERNAME ARRAY'DE(DATABASE'DEN ÇEVRİLEN ARRAY) VAR İSE İNDEX NUMARASINI DÖNECEK YOK İSE -1 DÖNECEK
    const dbNameCheck = keyString[keyString.indexOf(name)]
    const dbPswCheck = db[dbNameCheck]


    if (name === dbNameCheck & pwd === dbPswCheck) {
      res.sendFile(path.resolve('loged.html'));

    } else {
      res.send("Check Username & Password")
    }

  });

});

app.listen(port, function(req, res) {

})