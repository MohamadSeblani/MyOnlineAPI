const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 // 3arrafna shi esmo env, hatta ma njbor l app y3mel listing lal api 3a port 3000
// mensir bas badna nekod files mnezra3 fihon file esmo .env w men3aref fi l port l bdna y3mel listing 3le

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT)