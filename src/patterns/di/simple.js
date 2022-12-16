const userService = {
  users: [],
  createUser({ name }) {
    const user = {
      id: this.users.length + 1,
      name,
    };
    this.users.push(user);
    return user;
  },
};

function createUserController({ name }) {
  const user = userService.createUser({ name });
  return { user };
}

module.exports = { createUserController };
