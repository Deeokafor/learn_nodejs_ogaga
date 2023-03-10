const fs = require('node:fs');

const fileContent = fs.readFileSync('text.txt', 'utf-8');

console.log(fileContent);

fs.readFileSync('text.txt', 'utf-8', (error, data) => {
    if (error) {
        return console.log(error)
    } else {
        return console.log(data);
    }
});

fs.writeFileSync('text.txt', ' Hello World', {flag:'a'}, (err) => {
    if (err) {
        return console.log(err);
    } else {
        return console.log(`file has been written`);
    }
});