const User = require('../models/User');

const createUser = (data) => User.create(data);

const getUsers = () => User.find();

const getUserById = (id) => User.findById(id);

const updateUser = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true, runValidators: true });

const deleteUser = (id) => User.findByIdAndDelete(id);

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
