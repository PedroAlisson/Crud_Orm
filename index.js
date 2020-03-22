const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const router = require('./routers/router')

app.use(express.static('public'))
app.get('/', (req,res) => res.render('index'))
app.use('/pessoas', router)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.listen(port, () => console.log('Start'))