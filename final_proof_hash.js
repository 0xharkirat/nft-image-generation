

const fs = require('fs');
let obj = {};
let provenanceHash = '';

fs.readFile('image-hashes.json', handleFile)

function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data);
    
    obj.forEach(o => {
        if(obj.find(x => x.hash === o.hash && x.tokenId !== o.tokenId)) {
            console.error(`${o.tokenId} with hash (${o.hash}) is not unique`);
            throw err;
        } else {
            provenanceHash += o.hash;
        }
    });
    fs.writeFileSync("provenance-hash.txt", provenanceHash);
}