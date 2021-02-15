var express= require("express");
var app= express();
var query = require('querystring');
const path = require("path");
const ejs =require("ejs");
//let ejs = require('ejs');

const views = path.join(__dirname,"../views");
console.log(views);

app.set('view engine','ejs');
//app.engine('ejs',require('ejs').renderFile);

//app.engine('html',require('ejs'.renderFile));


const port = process.env.PORT || 3000 // since 3000 is for local one if
//we want our app to work everywhere we write this line
app.get('/',function(req,res){
    res.render(path.join(__dirname,"../views/partials/index.ejs"));
});

console.log();

app.get('/:name',function(req,res){
    var data = {age:18,job: "kidnaping"}
    res.render(path.join(__dirname,"../views/partials/profile.ejs"), {person : req.params.name,data: data})
});

app.get("/profile",function(req,res){
    res.render(path.join(__dirname,"../views/partials/profile.ejs"),{qs:req.query});

});

app.listen(port , ()=>{
    console.log(`server is running at port ${port}`);
  });
