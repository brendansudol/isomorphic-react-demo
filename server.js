import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/App';


let app = express();

app.use(express.static(__dirname + '/static'));
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  const data = {name: req.query.name || "pal"};
  const content = ReactDOMServer.renderToString(<App {...data} />);

  res.render("index", {
    content: content,
    state: JSON.stringify(data)
  });
});


app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}...`);
});
