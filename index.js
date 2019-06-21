const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/rates'))
  .get('/rates', (req, res) => res.render('pages/rates'))
  .get('/getRate', function(req, res){ 
    console.log(req.query.weight);
    console.log(req.query.mail);
    res.locals.query = req.query;
    res.render('pages/getRate')
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
