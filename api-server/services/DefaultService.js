/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* end point untuk menghapus user berdasarkan id
*
* id Integer 
* no response value expected for this operation
* */
const userIdDELETE = ({ id }) => new Promise(
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
const userIdGET = ({ id }) => new Promise(
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
* endpoint untuk mengubah data user bedasarkan id
*
* id Integer 
* name String 
* email String 
* age Integer 
* returns List
* */
const userIdPUT = ({ id, name, email, age }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        name,
        email,
        age,
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
const usersGET = () => new Promise(
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

module.exports = {
  userIdDELETE,
  userIdGET,
  userIdPUT,
  usersGET,
};
