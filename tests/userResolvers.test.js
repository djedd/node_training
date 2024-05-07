const { Query: userQueries } = require("../graphql/resolvers/userResolvers");
const User = require("../models/User");

// Mock User.findAll function
jest.mock("../models/User", () => ({
  findAll: jest.fn(),
}));

describe("User Resolvers", () => {
  test("should fetch users", async () => {
    User.findAll.mockResolvedValue([
      { id: 1, username: "testuser", email: "test@example.com" },
    ]);
    const result = await userQueries.users();
    expect(result).toEqual([
      { id: 1, username: "testuser", email: "test@example.com" },
    ]);
    expect(User.findAll).toHaveBeenCalled();
  });
});
