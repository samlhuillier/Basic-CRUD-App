const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

let users = [
    {
        id: 1,
        name: 'sam',
        email: 'sam@gmail.com',
    },
    {
        id: 2,
        name: 'jim',
        email: 'jim@gmail.com',
    },
    {
        id: 3,
        name: 'dan',
        email: 'dan@gmail.com',
    },
]
app.get('/api/users', (req, res) => {
    res.json(users)
})


app.listen(PORT, ()=> console.log("server running on port " + PORT))