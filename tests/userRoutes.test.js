const request = require("supertest");
const app = require("../server");

describe("GET /api/users", () => {
  test("It should respond with an array of users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
