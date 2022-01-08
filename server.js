const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const products = require('./server/routes/products');
var mongoUtil = require( './server/mongoUtil' );


// const db = 'mongodb+srv://roshan5130:Qwerty1@cluster0.4a4mr.mongodb.net/sample_airbnb?retryWrites=true&w=majority';

// mongoose.connect(db).then(()=>{
//     console.log('connection successfully 123');
// }).catch((err)=> console.log('no connection', err));

mongoUtil.connectToServer();

// const movieSchema = {
//   name:String
// }

// const Movies = mongoose.model('movies', movieSchema);

// app.get('/movies', function(req, res) {
//   Movies.find().then(movies => res.json(movies))
// })

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', products);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})