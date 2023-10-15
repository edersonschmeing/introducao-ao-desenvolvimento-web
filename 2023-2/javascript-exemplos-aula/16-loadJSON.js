'use strict';
const fs = require('fs');

const loadJSON = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, content) => {
      if(err) {
         reject(err)
      }
      else
      {
         try {
            resolve(JSON.parse(content));
         } catch(err) {
            reject(err)
         }
      }
    })
  });
}

loadJSON(`${__dirname}/16-pedido.json`)
.then(console.log)
.catch(console.log);