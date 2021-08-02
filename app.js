const data = require("./data.json").projects;
const express = require("express");

// Added set for pug to use it as a view engine
app.set("view engine", "pug"); 
app.set('views', './views');
app.use('/static', express.static('public'));