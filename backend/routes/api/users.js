const express = require('express')
const uuid = require('uuid')
const router = express.Router()

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
        name: 'danny',
        email: 'dan@gmail.com',
    },
]
//get all users:
router.get('/', (req, res) => {
    res.json(users)
})

//Create a user:
router.post('/', (req, res) => {
    const newUser = req.body 
    if (!newUser.email){
        return res.status(400).json({ msg: 'Please include an email'})
    }
    else if (!newUser.name){
        return res.status(400).json({ msg: 'Please include a name'})
    }
    newUser.id = uuid.v4()
    users.push(newUser)
    res.json(newUser)
    
})

//Update user 
router.put('/:id', (req, res) => {
    // const foundUser = users.find(user => user.id===parseInt(req.params.id))
    
    users.map(user => {
        if (user.id===parseInt(req.params.id)){
            if (req.body.name){
                user.name = req.body.name
            }
            if (req.body.email){
                user.email = req.body.email 
            }    
        }
        return user
    })
    console.log(users)
    res.json(users)
})

router.delete('/:id', (req, res) => {
    // const foundUser = users.find(user => user.id===parseInt(req.params.id))
    console.log(parseInt(req.params.id))
    users.filter(user => user.id !== parseInt(req.params.id))
    res.json(users)
})

module.exports = router