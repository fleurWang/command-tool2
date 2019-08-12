#! usr/bin/env node

const program = require('commander');

const { addCustomer, findCustomer } = require('./index.js');

program.version('1.0.0')
       .description('fleur cli exercise');

program.command('add <name>')
       .alias('a')
       .description('Add a Customer')
       .action(name => {
          addCustomer(name);
       });

program.command('find <name>')
       .alias('f')
       .description('find the Customer')
       .action(name => {
          findCustomer(name);
       })

program.parse(process.argv);