// src/services/userService.js

const User = require('../models/userModel');

// Service to handle user-related operations

/**
 * Create a new user
 * @param {Object} userData - The data for the new user
 * @returns {Promise<User>} - The created user
 */
const createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

/**
 * Find a user by email
 * @param {string} email - The email of the user to find
 * @returns {Promise<User|null>} - The found user or null if not found
 */
const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

/**
 * Update user password
 * @param {string} userId - The ID of the user to update
 * @param {string} newPassword - The new password
 * @returns {Promise<User>} - The updated user
 */
const updateUserPassword = async (userId, newPassword) => {
    return await User.findByIdAndUpdate(userId, { password: newPassword }, { new: true });
};

module.exports = { createUser, findUserByEmail, updateUserPassword };