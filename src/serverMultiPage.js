const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

//this is to serve static files e.g. css, js and images
app.use("/static", express.static(path.resolve(__dirname, "../dist")))

app.get('/hello-world', function(req, res){
    const filePath = path.resolve(__dirname, "../dist/hello-world-page.html");
    const data = fs.readFileSync(filePath, {encoding:'utf8'});
    res.send(data);
})

app.get('/image', function(req, res){
    const filePath = path.resolve(__dirname, "../dist/image-page.html");
    const data = fs.readFileSync(filePath, {encoding:'utf8'});
    res.send(data);
})
app.listen(3000, function(){
    console.log('application is running at port 3000');
})