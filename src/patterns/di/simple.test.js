import { createUserController } from "./simple";

describe("update user controller", () => {
  it("should update user", () => {
    const user = createUserController({ name: "john" });
    expect(JSON.stringify(user)).toEqual(JSON.stringify({ user: { id: 1, name: "john" } }));
  });
});
