const express = require('express')
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 3000 // 3arrafna shi esmo env, hatta ma njbor l app y3mel listing lal api 3a port 3000
// mensir bas badna nekod files mnezra3 fihon file esmo .env w men3aref fi l port l bdna y3mel listing 3le
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('/students', function (req, res) {
  var data = [
    {id:1 , name:'mohamad'},
    {id:2 , name:'hadi'},
    {id:3 , name:'tala'},
    {id:4 , name:'rony'},
  ]
  res.send(data)
})


app.listen(PORT)