const express = require('express')
const uuid = require('uuid')
const router = express.Router()

let users = []
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
    console.log(req.body)
    users = users.map(user => {
        if (user.id==req.params.id){
            if (req.body.name){
                user.name = req.body.name
            }
            if (req.body.email){
                user.email = req.body.email 
            }    
        }
        return user
    })
    // console.log(users)
    res.json(users)
})

router.delete('/:id', (req, res) => {
    // const foundUser = users.find(user => user.id===parseInt(req.params.id))

    users = users.filter(user => user.id !=req.params.id)
    res.json({msg: 'success'})
})

module.exports = router