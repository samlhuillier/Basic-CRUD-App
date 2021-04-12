"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var userService_1 = require("../services/userService");
var users = [];
//get all users:
var userService = new userService_1.UserService();
router.get('/', function (req, res) {
    res.json(userService.getUsers());
});
//Create a user:
router.post('/', function (req, res) {
    if (!req.body.email) {
        return res.status(400).json({ msg: 'Please include an email' });
    }
    else if (!req.body.name) {
        return res.status(400).json({ msg: 'Please include a name' });
    }
    else {
        var newUser = userService.addUser(req.body.name, req.body.email);
        res.json(newUser);
    }
});
//Update user 
router.put('/:id', function (req, res) {
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
    userService.modifyUser(req.params.id, req.body.name, req.body.email);
    res.json({ msg: 'success' });
});
router.delete('/:id', function (req, res) {
    // const foundUser = users.find(user => user.id===parseInt(req.params.id))
    // users = users.filter(user => user.id !=req.params.id)
    userService.deleteUser(req.params.id);
    res.json({ msg: 'success' });
});
module.exports = router;
