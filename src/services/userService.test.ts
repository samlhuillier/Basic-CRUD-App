import { UserService } from './userService'

describe("test user service", () => {
    describe("test get method", () => {
        it("get users returns empty array", () => {
            let userService = new UserService()
            expect(userService.getUsers()).toEqual([]);
        });
      });
  });