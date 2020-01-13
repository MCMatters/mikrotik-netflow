const scheme = 'mongodb://';
const user = 'root';
const password = 'pass';
const url = 'mongo';
const port = 27017;
const database = 'mikrotik';
const options = 'authSource=admin';

module.exports = {
  url: `${scheme}${user}:${password}@${url}:${port}?${options}`,
  database,
};
