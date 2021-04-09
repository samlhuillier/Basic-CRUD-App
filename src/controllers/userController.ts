import express, {Application, Request, Response, NextFunction} from 'express'
import { v4 as uuid } from 'uuid'
const router = express.Router()
import { User } from '../models/User'
import { UserService } from '../services/userService'
let users: User[] = []

//get all users:
let userService = new UserService()

router.get('/', (req: Request, res: Response) => {
    
    res.json(userService.getUsers())
    
})

//Create a user:
router.post('/', (req: Request, res: Response) => {
    if (!req.body.email){
        return res.status(400).json({ msg: 'Please include an email'})
    }
    else if (!req.body.name){
        return res.status(400).json({ msg: 'Please include a name'})
    }
    else {
        const newUser = userService.addUser(req.body.name, req.body.email)
        res.json(newUser)
    }   
})

//Update user 
router.put('/:id', (req: Request, res: Response) => {
    // const foundUser = users.find(user => user.id===parseInt(req.params.id))
    // users = users.map(user => {
    //     if (user.id==req.params.id){
    //         if (req.body.name){
    //             user.name = req.body.name
    //         }
    //         if (req.body.email){
    //             user.email = req.body.email 
    //         }    
    //     }
    //     return user
    // })
    // console.log(users)
    userService.modifyUser(req.params.id, req.body.name, req.body.email)
    res.json({msg: 'success'})
})

router.delete('/:id', (req: Request, res: Response) => {
    // const foundUser = users.find(user => user.id===parseInt(req.params.id))

    // users = users.filter(user => user.id !=req.params.id)
    userService.deleteUser(req.params.id)
    res.json({msg: 'success'})
})

module.exports = router