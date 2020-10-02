const app = require('./app')

// finally, let's start our server...
var server = app.listen( process.env.PORT || 3000, () => {
  console.log('Listening on port ' + server.address().port)
})

