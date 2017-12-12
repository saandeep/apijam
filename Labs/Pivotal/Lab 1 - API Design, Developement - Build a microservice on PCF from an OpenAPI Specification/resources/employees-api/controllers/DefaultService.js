'use strict';

exports.employee_uuidDELETE = function(args, res, next) {
  /**
   * Delete an Employee with given UUID
   * This endpoint will delete an existing Employee.
   *
   * employeeUuid Integer UUID of a Employee
   * returns Employee
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.employee_uuidGET = function(args, res, next) {
  /**
   * Get an Employee with given UUID.
   * This endpoint returns a Employee from a given UUID.
   *
   * employeeUuid Integer UUID of a Employee
   * returns Employee
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.employee_uuidPUT = function(args, res, next) {
  /**
   * Update an Employee with given UUID
   * This endpoint will update an existing Employee.
   *
   * employeeUuid Integer UUID of a Employee
   * body Employee an Employee oject
   * returns Employee
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rootGET = function(args, res, next) {
  /**
   * Get all Employees
   * This endpoint returns a list of all Employees as an array.
   *
   * returns EmployeesArray
   **/
  var examples = {};
  examples['application/json'] = [{
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
}, {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
}, {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
}];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rootPOST = function(args, res, next) {
  /**
   * Create a new Employee
   * This endpoint will create a new Employee.
   *
   * body Employee an Employee oject
   * returns Employee
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

