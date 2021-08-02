const express = require("express");
const app = express();
const data = require("./data.json").projects;

// Added set for pug to use it as a view engine
app.set("view engine", "pug"); 
app.set('views', './views');
app.use('/static', express.static('public'));
// Added images otherwise the page will not show images on the index when loaded in through data
app.use('/images', express.static('images'));


// When index route is called
app.get('/', (req, res) => {
    res.render('index', {data});
  });
  
// When about route is called
app.get('/about', (req, res) => {
    res.render('about');
  });

  // Getting a project
  app.get('/project/:id', (req, res) => {
      res.render('project', {data, data: data[req.params.id]});
    });


    // Must be below above otherwise all reqests are failing
    app.use((req, res, next) => {
        console.log('404 error handler called')
        const error = new Error('The requested page could not be found');
        error.code = 404; 
        next(error);
    })
    app.use((error, req, res, next) => {
        if(error.code === 404)
        {
            res.status(error.code); 
            res.render('page-not-found.pug', {error: error}); //render error in error template
        }
        else
        {
            error.message || "Something went wrong on the server"
            res.status(error.code || 500); 
            res.render('error', {error: error}); //render error in error template
        }
    })

  // Listen to port 300
app.listen(3000, () => {
    console.log('Application running on port 3000');
  });