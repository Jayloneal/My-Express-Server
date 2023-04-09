//jshint esversion:6

const express = require("express");

const app = express()

app.get("/", function(req, res){
  res.send("<h1> Hey, all you people!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: jaylon.oneal@outlook.com")
});

app.get("/about", function(req, res){
  res.send("My name is Jaylon O'Neal and I am from Columbus, Georgia.")
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Researching</li><li>Learning</li><li>Exercising</ul>")
});

app.listen(3000 , function(){
   console.log("Server started on Port 3000");
});
