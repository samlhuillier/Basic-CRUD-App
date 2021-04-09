"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var uuid_1 = require("uuid");
var router = express_1.default.Router();
var users = [];
//get all users:
router.get('/', function (req, res) {
    res.json(users);
});
//Create a user:
router.post('/', function (req, res) {
    var newUser = req.body;
    if (!newUser.email) {
        return res.status(400).json({ msg: 'Please include an email' });
    }
    else if (!newUser.name) {
        return res.status(400).json({ msg: 'Please include a name' });
    }
    newUser.id = uuid_1.v4();
    users.push(newUser);
    res.json(newUser);
});
//Update user 
router.put('/:id', function (req, res) {
    // const foundUser = users.find(user => user.id===parseInt(req.params.id))
    console.log(req.body);
    users = users.map(function (user) {
        if (user.id == req.params.id) {
            if (req.body.name) {
                user.name = req.body.name;
            }
            if (req.body.email) {
                user.email = req.body.email;
            }
        }
        return user;
    });
    // console.log(users)
    res.json(users);
});
router.delete('/:id', function (req, res) {
    // const foundUser = users.find(user => user.id===parseInt(req.params.id))
    users = users.filter(function (user) { return user.id != req.params.id; });
    res.json({ msg: 'success' });
});
module.exports = router;
