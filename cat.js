

const fs = require('fs');

function cat(doc) {
    fs.readFile(doc, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        process.stdout.write('\nprompt > ');
    });
    
}

module.exports = cat;