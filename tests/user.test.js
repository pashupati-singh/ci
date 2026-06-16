const userService = require('../src/services/userService');
const User = require('../src/models/User');

jest.mock('../src/models/User');

describe('User Service', () => {
  afterEach(() => jest.clearAllMocks());

  test('createUser creates a user', async () => {
    const data = { name: 'John', email: 'john@test.com' };
    User.create.mockResolvedValue(data);

    const result = await userService.createUser(data);

    expect(User.create).toHaveBeenCalledWith(data);
    expect(result).toEqual(data);
  });

  test('getUsers returns all users', async () => {
    const users = [{ name: 'John', email: 'john@test.com' }];
    User.find.mockResolvedValue(users);

    const result = await userService.getUsers();

    expect(User.find).toHaveBeenCalled();
    expect(result).toEqual(users);
  });

  test('updateUser updates a user', async () => {
    const updated = { name: 'Jane', email: 'jane@test.com' };
    User.findByIdAndUpdate.mockResolvedValue(updated);

    const result = await userService.updateUser('123', { name: 'Jane' });

    expect(User.findByIdAndUpdate).toHaveBeenCalledWith(
      '123',
      { name: 'Jane' },
      { new: true, runValidators: true }
    );
    expect(result).toEqual(updated);
  });

  test('deleteUser deletes a user', async () => {
    const deleted = { name: 'John', email: 'john@test.com' };
    User.findByIdAndDelete.mockResolvedValue(deleted);

    const result = await userService.deleteUser('123');

    expect(User.findByIdAndDelete).toHaveBeenCalledWith('123');
    expect(result).toEqual(deleted);
  });
});
