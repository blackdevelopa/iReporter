'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Dummy user details

var users = [{
  id: 1,
  firstname: 'Sylva',
  lastname: 'Elendu',
  othernames: '',
  email: 'sylvaelendu91@gmail.com',
  phoneNumber: '07038589263',
  username: 'sylvaelendu',
  registered: new Date().toLocaleString(),
  isAdmin: 'false',
  password: '1234'
}, {
  id: 2,
  firstname: 'admin',
  lastname: 'admin',
  othernames: '',
  email: 'admin@me.com',
  phoneNumber: '',
  username: 'admin',
  registered: new Date().toLocaleString(),
  isAdmin: 'true',
  password: '1234'
}];

exports.default = users;