


'use strict';

const imagesDir = './images/';
const fs = require('fs');
const crypto = require('crypto');
const hashes = [];
const provenanceHash = ''

const createHashFromFile = filePath => new Promise(resolve => {
    const hash = crypto.createHash('sha256');
    fs.createReadStream(filePath).on('data', data => hash.update(data)).on('end', () => resolve(hash.digest('hex')));
  });

fs.readdir(imagesDir, (err, files) => {
  files.forEach(file => {    
    (async () => {
        const hash = await createHashFromFile(`${imagesDir}${file}`);
        console.log(`{"tokenId":${parseInt(file.replace('.png', ''))}, "hash":"${hash}"},`)
    })();
  });  
});