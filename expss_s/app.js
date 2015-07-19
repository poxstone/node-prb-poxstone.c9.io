var express = require('express');
var app = express();
var fs = require('fs');

//load teh form file html
var form_html;
fs.readFile(__dirname +'/form.html',function(err,data){
    form_html = data.toString();
});

//to get url form
app.get(/\/forms?/,function(req,res){
    
    res.send(form_html);
    //console.log('req',req);   
});
app.get('/',function(req,res){
    res.send('Hello world');
    console.log.send('Hello world');
    //console.log('req',req);
});

app.post('/',function(req,res){
    res.send('Hello post');
    console.log.send('Hello post');
    //console.log('req',req);
});
app.put('/',function(req,res){
    res.send('Hello post');
    console.log('Hello put');
    //console.log('req',req);
});
app.delete('/',function(req,res){
    res.send('Hello post');
    console.log('Hello deletet');
    //console.log('req',req);
});

var server = app.listen(8080,function(){
    var address = this.address().address;
    var port = this.address().port;
    console.log('puerto',port,address);
});