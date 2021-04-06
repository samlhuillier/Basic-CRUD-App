const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

//Parse the body:
app.use(express.json())

// app.use(express.urlencoded( { extended: false }))
app.use('/api/users', require('./routes/api/users'))

app.listen(PORT, ()=> console.log("server running on port " + PORT))