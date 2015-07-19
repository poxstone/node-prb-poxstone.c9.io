var express = require('express');
var app = express();

app.get(/\/forms?/,function(req,res){
    var html='<!DOCUTYPE html>\
        <html lang="eng">\
            <head>\
                <meta charset="utf-8">\
                <title>Docutype</title>\
            </head>\
            <body>\
                <form method="get" action="">\
                    <input type="submit" name="nombre" value="get-hola"/>\
                </form>\
                <form method="post" action="">\
                    <input type="submit" name="nombre" value="post-hola"/>\
                </form>\
                <form method="put" action="">\
                    <input type="submit" name="nombre" value="put-hola"/>\
                </form>\
                <form method="delete" action="">\
                    <input type="submit" name="nombre" value="delete-hola"/>\
                </form>\
            </body>\
        </html>';
    res.send(html);
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