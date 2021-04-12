"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 5000;
//Parse the body:
app.use(express_1.default.json());
app.use('/api/users', require('./controllers/userController'));
app.listen(PORT, function () { return console.log("server running on port " + PORT); });
