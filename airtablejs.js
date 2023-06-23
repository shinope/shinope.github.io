var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyMv52HVyoxbRogd'}).base('appEGHkamWnnBFdl9');

base('Table 1').create([
  {
    "fields": {
      "First name": "mahmud",
      "last name": "ibrahim",
      "Email": {
        "id": "usrQufGuZtJfJ84H5",
        "email": "mk66776677@gmail.com",
        "name": "Mahmud Ibrahim"
      }
    }
  },
  {
    "fields": {
      "First name": "mahmud ",
      "last name": "ibrahim",
      "Email": {
        "id": "usrQufGuZtJfJ84H5",
        "email": "mk66776677@gmail.com",
        "name": "Mahmud Ibrahim"
      }
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});