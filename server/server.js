var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var flat = require('./routes/flat')
var users = require('./routes/users')
var bills = require('./routes/bills')
var jobs = require('./routes/jobs')
var events = require('./routes/events')
var addEvent = require('./routes/addEvent')
var shoppingListItems = require('./routes/shoppingListItems')
var roster = require('./routes/roster')
var updateFlatId = require('./routes/updateFlatId')
var flatUsers = require('./routes/flatusers')
var updateJobs = require('./routes/updateJobs')

var server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/flat', flat)
server.use('/api/users', users)
server.use('/api/bills', bills)
server.use('/api/jobs', jobs)
server.use('/api/events', events)
server.use('/api/addEvent', addEvent)
server.use('/api/shopping_list_items', shoppingListItems)
server.use('/api/roster', roster)
server.use('/api/delEvent', events)
server.use('/api/addUser', users)
server.use('/api/delUser', users)
server.use('/api/updateEmail', users)
server.use('/api/updateflatid', updateFlatId)
server.use('/api/flatusers', flatUsers)
server.use('/api/updatejobs', updateJobs)

module.exports = server
