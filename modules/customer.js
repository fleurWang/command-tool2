const fs = require('fs'),
      path = require('path');

exports.create = (name) => {
  fs.readFile(path.join(__dirname, '../data.json'), 'utf8', (err, data) => {
    if(err){
      console.log('hh')
    }

    var customerList = JSON.parse(data);
    customerList.push({name});
    console.log(customerList);

    fs.writeFile(path.join(__dirname, '../data.json'), JSON.stringify(customerList) ,function(err){
      if(err){
          console.error(err);
      }
      console.log('----------新增成功-------------');
    })

  })
}
