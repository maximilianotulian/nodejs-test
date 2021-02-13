const express = require('express');
const app = express();
const path = require('path');

//app.use((req, res) => {
  // This match every request
  //console.log('we got a request');
  //res.send('Hello world'); We're done when we send the request
  //})
  
  // app.get('/cats', (_, res) => {
    // res.send('meow');
    // });
    
    // app.get('/dogs', (_, res) => {
      // res.send('wofs');
      // });
      
      // app.get('/r/:subredit', (req, res) => {
        // res.send(`this is a subredit ${req.params.subredit}`);
        // });
        
        // app.get('/search', (req, res) => {
          // if (Object.keys(req.query).length === 0) {
            // res.send('Nothing found if nothing search');
            // };
            // res.send('<h1>Response from search</h1>')
            // });

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (_, res) => {
  res.render('home');
});

app.get('*', (_, res) => {
  res.send(`I don't know that path`);
});

app.listen(3000, () => {
console.log('listen in 3000');
});