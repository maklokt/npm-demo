const fs = require('fs')
const zlib = require('zlib')
const strs = require('stringstream')
 
const utf8Stream = fs.createReadStream('abc.txt')
  .pipe(strs('utf8'))
 
utf8Stream.on('data', str => console.log(`This will be a string: ${str}`))