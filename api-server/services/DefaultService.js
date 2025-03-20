/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* endpoint untuk membuat user baru
*
* updateUserByIdRequest UpdateUserByIdRequest 
* returns List
* */
const createUser = ({ updateUserByIdRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        updateUserByIdRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* end point untuk menghapus user berdasarkan id
*
* id Integer 
* no response value expected for this operation
* */
const deleteUserById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* endpoint untuk mendapatkan user sesuai id
*
* id Integer 
* returns List
* */
const getUserById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* end point untuk mendapat semua user
*
* returns List
* */
const getUsers = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* endpoint untuk mengubah data user bedasarkan id
*
* id Integer 
* updateUserByIdRequest UpdateUserByIdRequest 
* returns List
* */
const updateUserById = ({ id, updateUserByIdRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        updateUserByIdRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  updateUserById,
};
