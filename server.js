var express  = require('express');
var app = express();

app.get('/', function(req,res){
    res.json({'msg':'Hello world from docker auto build part two  '});
});

var port = process.env.port || 3000; 
app.listen(port, function(){
    console.log('Server started and listening at 3000');
});
