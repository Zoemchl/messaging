const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


// mongoose.set("useCreateIndex", true);
mongoose.connect('mongodb+srv://matisdn:aurianegrandefolle@cluster0.lgvub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-with,Content,Accept,Content-Type,Authorization')
//     res.setHeader('Access-Control-Allow-Method', "GET,POST,PUT,DELETE")
//     next();
// })
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const postRoutes = require('./routes/postRoute')


app.use('/', postRoutes)


app.use((reg, res)=>{
    res.json({message:'ton serveur marche, cest cool'});
    
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
  });

module.exports = app;
