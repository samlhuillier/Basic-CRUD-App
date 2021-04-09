import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

//Parse the body:
app.use(express.json())

app.use('/api/users', require('./controllers/userController'))

app.listen(PORT, ()=> console.log("server running on port " + PORT))
