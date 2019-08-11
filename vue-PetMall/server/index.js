const express = require('express')
const app = express()

const bodyParser = require('body-parser');
require('./mongoose/db')(app)
require('./router/router')(app)


app.use(express.json())
    //跨域
app.use(require('cors')())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(8999, () => {
    console.log('http://localhost:8999');
})