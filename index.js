const Customer = require('./modules/customer');

const addCustomer = (customer) => {
  Customer.create(customer)
  // .then(customer => {
  //   console.info('new Customer Added');
  // });
};

const findCustomer = (name) => {
  // make case insensitive
  const search =  new RegExp(name, 'i');
  Customer.find(name).then((customer) => {
    console.log(customer);
  });
}

module.exports = {
  addCustomer,
  findCustomer
}