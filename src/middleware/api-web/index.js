const express = require('express')
const app = express()
const dbconfig = require('./configdb/config')
const mongoose = require('mongoose')
const port = process.env.PORT || 5400
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json({
   extended: true,
   limit: '50mb' 
}))

app.use(bodyParser.urlencoded({
   extended: true,
   limit: '50mb' 
}))

mongoose.connect(dbconfig.mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(() => console.log('connect mongodb'))
.catch(err => console.log(err));

// list router
app.use('/admin', require('./routes/admin'))
app.use('/users', require('./routes/user'))
app.use('/device', require('./routes/device'))
app.use('/marker', require('./routes/marker'))
app.use('/detaildevice', require('./routes/detaildevice'))

app.listen(port, function(){
    console.log("Server Started on port "+ port)
})