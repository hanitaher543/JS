const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config()
const MORGAN = require('morgan')
app.use(MORGAN('tiny'))

app.use('/',(req, res) => {
    res.json({
        mes: 'Hello World !!'
    })

});


const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`server done in port: ${PORT}`))
