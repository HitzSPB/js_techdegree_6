const express = require("express");
const app = express();
const data = require("./data.json").projects;

// Added set for pug to use it as a view engine
app.set("view engine", "pug"); 
app.set('views', './views');
app.use('/static', express.static('public'));

// When index route is called
app.get('/', (req, res) => {
    res.render('index');
  });
  
// When about route is called
app.get('/about', (req, res) => {
    res.render('about');
  });

  // Getting a project
  app.get('/project/:id', (req, res) => {
      res.render('project');
    });

  // Listen to port 300
app.listen(3000, () => {
    console.log('Application running on port 3000');
  });