import express, {Application, Request, Response, NextFunction} from 'express'
import uuid from 'uuid'
const app = express()
const PORT = process.env.PORT || 5000

//Parse the body:
app.use(express.json())

// app.use(express.urlencoded( { extended: false }))
app.use('/api/users', require('./controllers/userController'))

app.listen(PORT, ()=> console.log("server running on port " + PORT))
// const app : Application = express() 

// let users: User[] = []

// //get all users:
// app.get('/', (req: Request, res: Response) => {
//     res.json(users)
// })

// //Create a user:
// app.post('/', (req: Request, res: Response) => {
//     const newUser = req.body 
//     if (!newUser.email){
//         return res.status(400).json({ msg: 'Please include an email'})
//     }
//     else if (!newUser.name){
//         return res.status(400).json({ msg: 'Please include a name'})
//     }
//     newUser.id = uuid.v4()
//     users.push(newUser)
//     res.json(newUser)
    
// })

// //Update user 
// app.put('/:id', (req: Request, res: Response) => {
//     // const foundUser = users.find(user => user.id===parseInt(req.params.id))
//     console.log(req.body)
//     users = users.map(user => {
//         if (user.id==req.params.id){
//             if (req.body.name){
//                 user.name = req.body.name
//             }
//             if (req.body.email){
//                 user.email = req.body.email 
//             }    
//         }
//         return user
//     })
//     // console.log(users)
//     res.json(users)
// })

// app.delete('/:id', (req: Request, res: Response) => {
//     // const foundUser = users.find(user => user.id===parseInt(req.params.id))

//     users = users.filter(user => user.id !=req.params.id)
//     res.json({msg: 'success'})
// })

// app.listen(5000, () => console.log("server running"))