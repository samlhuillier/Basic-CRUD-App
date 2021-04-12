import { UserService } from './userService'

describe("test user service", () => {
    describe("test get method", () => {
        it("get users returns empty array", () => {
            const userService = new UserService()
            expect(userService.getUsers()).toEqual([]);
        });
      });
      describe("test add user method", () => {
        it("add one user and see if length increases", () => {
            const userService = new UserService()
            userService.addUser("name", "email")
            expect(userService.getUsers().length).toEqual(1);
        });
        it("see if added user present in all users", () => {
            const userService = new UserService()
            userService.addUser("name", "email")
            expect(userService.getUsers().some(user => user.name==="name" && user.email==="email")).toEqual(true);
        });
      });
      describe("test delete method", () => {
        it("delete changes length", () => {
            const userService = new UserService()
            const createdUser = userService.addUser("name", "email")
            userService.deleteUser(createdUser.id)
            expect(userService.getUsers().length).toEqual(0);
        });
        it("deleted user no longer present", () => {
            const userService = new UserService()
            const createdUser = userService.addUser("name", "email")
            userService.deleteUser(createdUser.id)
            expect(userService.getUsers().some(user => user.id===createdUser.id)).toEqual(false);
        });
      });

      describe("test modify method", () => {
        it("modified user values present in users array", () => {
            const userService = new UserService()
            const createdUser = userService.addUser("name", "email")
            userService.modifyUser(createdUser.id, "newName", "newEmail")
            expect(userService.getUsers().some(user => 
                user.id===createdUser.id && user.name==="newName" && user.email==="newEmail"
            )).toEqual(true);
        });
      });
      
  });