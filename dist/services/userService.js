"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var uuid_1 = require("uuid");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    UserService.prototype.addUser = function (newName, newEmail) {
        var newUser = { id: uuid_1.v4(), name: newName, email: newEmail };
        this.users.push(newUser);
        return newUser;
    };
    UserService.prototype.deleteUser = function (id) {
        this.users = this.users.filter(function (user) { return user.id != id; });
    };
    UserService.prototype.modifyUser = function (id, newName, newEmail) {
        this.users = this.users.map(function (user) {
            if (user.id == id) {
                return { id: id, name: newName, email: newEmail };
            }
            return user;
        });
    };
    return UserService;
}());
exports.UserService = UserService;
