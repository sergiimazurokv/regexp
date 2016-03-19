'use strict';

var addresses = require('./addresses');

var result = [];

for (let i = 0, len = addresses.length; i < len; ++i) {

  var pattern = /^ *((ул|пл|пр-т|пер)?\.? *(([^,/]+),? *( +((дом)?\.? *((\d*-?[^,/ ])(( *\/ *|,? *кв\.? *)+(\d*))*)))*?)) *$/;

  var arr = addresses[i].match(pattern);

  result.push({
    street: arr[4].trim(),
    house: arr[9] || '',
    flat: arr[12] || ''
  });

}

module.exports = result;








