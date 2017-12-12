'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.employee_uuidDELETE = function employee_uuidDELETE (req, res, next) {
  Default.employee_uuidDELETE(req.swagger.params, res, next);
};

module.exports.employee_uuidGET = function employee_uuidGET (req, res, next) {
  Default.employee_uuidGET(req.swagger.params, res, next);
};

module.exports.employee_uuidPUT = function employee_uuidPUT (req, res, next) {
  Default.employee_uuidPUT(req.swagger.params, res, next);
};

module.exports.rootGET = function rootGET (req, res, next) {
  Default.rootGET(req.swagger.params, res, next);
};

module.exports.rootPOST = function rootPOST (req, res, next) {
  Default.rootPOST(req.swagger.params, res, next);
};
