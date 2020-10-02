var express = require('express')
var multer  = require('multer')
var morgan = require('morgan')
var upload = multer({ dest: 'uploads/' })

var app = express()
app.use(morgan('combined'))

app.post('/api/auth/register', upload.single('avatar'), function (req, res, next) {
  const { jsonStr } = req.body
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file)
  console.log('req.body', JSON.stringify(req.body, null, 2))
  res.json({ ok: true })
})

app.get('/api', function (req, res, next) {
  res.json({ api: 'ok' })
})

module.exports = app
